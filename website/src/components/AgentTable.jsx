import {
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";

const AgentTable = forwardRef(function AgentTable(
  {
    onAgentClick,
    filterNames,
    searchTerm = "",
    initialCriteria = [],
    limit,
  },
  ref
) {
  const [agents, setAgents] = useState([]);
  // Default sort alphabetically by name
  const [sortConfig, setSortConfig] = useState({ key: "name", direction: "asc" });
  const [ratings, setRatings] = useState({});
  const [criteria, setCriteria] = useState([]);
  const [selectedCriteria, setSelectedCriteria] = useState(initialCriteria);

  useEffect(() => {
    setSelectedCriteria(initialCriteria);
  }, [initialCriteria]);

  useEffect(() => {
    async function loadData() {
      try {
        const [agentsRes, ratingsRes, criteriaRes] = await Promise.all([
          fetch("/agents.json"),
          fetch("/persona_ratings.json"),
          fetch("/persona_criteria.json"),
        ]);
        if (!agentsRes.ok || !ratingsRes.ok || !criteriaRes.ok) {
          throw new Error("Failed to fetch data");
        }
        const [agentsData, ratingsData, criteriaData] = await Promise.all([
          agentsRes.json(),
          ratingsRes.json(),
          criteriaRes.json(),
        ]);
        setAgents(agentsData);
        setRatings(ratingsData);
        setCriteria(criteriaData);
      } catch (err) {
        console.error(err);
      }
    }

    loadData();
  }, []);

  useEffect(() => {
    setSortConfig((prev) => {
      if (selectedCriteria.length > 0) {
        return {
          key: "_avg",
          direction: prev.key === "_avg" ? prev.direction : "desc",
        };
      }
      if (prev.key === "_avg") {
        // When removing criteria, revert to alphabetical order
        return { key: "name", direction: "asc" };
      }
      return prev;
    });
  }, [selectedCriteria]);

  const filteredByNames = filterNames
    ? filterNames
        .map((name) =>
          agents.find(
            (a) =>
              a.name === name || a.name.replace(/\s+/g, '_') === name
          )
        )
        .filter(Boolean)
    : agents;

  const filteredAgents = searchTerm
    ? filteredByNames.filter((a) =>
        a.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : filteredByNames;

  const getAgentKey = (name) => {
    if (!name) return "";
    const lower = name.toLowerCase();
    const base = lower.split(".")[0];
    const withSpaces = base.replace(/\s+/g, "_");
    const sanitized = withSpaces.replace(/[^a-z0-9_]/g, "_");
    const candidates = [sanitized, lower, withSpaces];
    return candidates.find((k) => ratings[k]) || sanitized;
  };

  const computeAverage = (agent) => {
    const key = getAgentKey(agent.name);
    const ratingsForAgent = selectedCriteria.map(
      (id) => ratings[key]?.[id]?.rating || 0
    );
    if (ratingsForAgent.length === 0) return null;
    return (
      ratingsForAgent.reduce((sum, val) => sum + val, 0) /
      ratingsForAgent.length
    );
  };

  const agentsWithAverage = filteredAgents.map((a) => ({
    ...a,
    _avg: computeAverage(a),
  }));

  const sortedAgents = sortConfig.key
    ? [...agentsWithAverage].sort((a, b) => {
        const aValue =
          sortConfig.key === "_avg"
            ? a._avg ?? -1
            : (a[sortConfig.key] || "").toString().toLowerCase();
        const bValue =
          sortConfig.key === "_avg"
            ? b._avg ?? -1
            : (b[sortConfig.key] || "").toString().toLowerCase();
        if (aValue < bValue) {
          return sortConfig.direction === "asc" ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === "asc" ? 1 : -1;
        }
        return 0;
      })
    : agentsWithAverage;

  const displayedAgents = limit ? sortedAgents.slice(0, limit) : sortedAgents;

  const renderStars = (rating) => {
    if (!rating) return "☆☆☆☆☆";
    const filled = "★".repeat(rating);
    const empty = "☆".repeat(5 - rating);
    return filled + empty;
  };

  const categorizePricing = (pricing) => {
    if (!pricing) {
      return "undisclosed (or part of a larger subscription or license)";
    }

    const lower = pricing.toLowerCase();
    const amounts = pricing.match(/\$[0-9]+(?:\.[0-9]+)?/g) || [];
    const parts = [];

    const isOpenSource =
      lower.includes("open-source") || lower.includes("open source");
    const requiresKeyOrSelfHost =
      lower.includes("api key") ||
      lower.includes("api keys") ||
      lower.includes("byok") ||
      lower.includes("bring your own") ||
      lower.includes("self-host") ||
      lower.includes("self host") ||
      lower.includes("self-hosted") ||
      lower.includes("self hosted") ||
      lower.includes("local deployment") ||
      lower.includes("deploy locally");
    const mentionsHostedFree =
      lower.includes("hosted for free") ||
      (lower.includes("saas") && lower.includes("free"));

    if (
      lower.includes("free tier") ||
      lower.includes("limited free") ||
      (lower.includes("free plan") && lower.includes("limit"))
    ) {
      parts.push("Limited free tier");
    } else if (
      lower.includes("free") &&
      !lower.includes("trial") &&
      (!isOpenSource || mentionsHostedFree) &&
      !requiresKeyOrSelfHost
    ) {
      parts.push("Free (including usage!)");
    }

    if (
      lower.includes("usage") ||
      lower.includes("pay-as-you-go") ||
      lower.includes("per token") ||
      requiresKeyOrSelfHost ||
      (isOpenSource && !mentionsHostedFree)
    ) {
      parts.push("Variable by (API-) usage");
    } else if (lower.includes("credit")) {
      parts.push(
        amounts.length
          ? `Flat rate with credits (${amounts.join(", ")})`
          : "Flat rate with credits"
      );
    } else if (lower.includes("limit") || lower.includes("tier")) {
      parts.push(
        amounts.length
          ? `Flat rate with usage limits (${amounts.join(", ")})`
          : "Flat rate with usage limits"
      );
    } else if (amounts.length) {
      parts.push(`Flat rate (${amounts.join(", ")})`);
    }

    if (parts.length === 0) {
      parts.push("undisclosed (or part of a larger subscription or license)");
    }

    return parts.join(", ");
  };

  const toggleCriterion = (id) => {
    setSelectedCriteria((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  const exportData = (format) => {
    const headers = [
      "Name",
      "Website",
      "Developer",
      "Pricing",
      ...criteria.map((c) => c.name),
    ];

    const rows = displayedAgents.map((agent) => {
      const key = getAgentKey(agent.name);
      return [
        agent.name,
        agent.website,
        agent.developer,
        categorizePricing(agent.pricing_model),
        ...criteria.map((c) => ratings[key]?.[c.id]?.rating ?? ""),
      ];
    });

    let content = "";
    let mime = "text/plain";
    if (format === "json") {
      const jsonData = rows.map((row) =>
        Object.fromEntries(headers.map((h, i) => [h, row[i]]))
      );
      content = JSON.stringify(jsonData, null, 2);
      mime = "application/json";
    } else if (format === "csv") {
      const csvRows = [
        headers.join(","),
        ...rows.map((row) =>
          row
            .map((cell) => {
              const value = (cell ?? "").toString().replace(/"/g, '""');
              return `"${value}"`;
            })
            .join(",")
        ),
      ];
      content = csvRows.join("\n");
      mime = "text/csv";
    } else if (format === "md") {
      const mdRows = [
        `| ${headers.join(" | ")} |`,
        `| ${headers.map(() => "---").join(" | ")} |`,
        ...rows.map((row) => `| ${row.join(" | ")} |`),
      ];
      content = mdRows.join("\n");
      mime = "text/markdown";
    }

    const blob = new Blob([content], { type: mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `agent-table.${format}`;
    a.click();
    URL.revokeObjectURL(url);
  };

  useImperativeHandle(ref, () => ({
    exportData,
  }));

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm text-stratos-blue dark:text-gray-100 border border-background-blue dark:border-gray-700">
        <thead className="bg-background-blue text-white dark:bg-stratos-blue">
          <tr>
            <th className="px-4 py-2 font-archia">Name</th>
            <th className="px-4 py-2 font-archia">Website</th>
            <th className="px-4 py-2 font-archia">Developer</th>
            <th className="px-4 py-2 font-archia">Pricing</th>
            {criteria.map((c) => (
              <th key={c.id} className="px-2 py-2 font-archia">
                <div className="flex items-center justify-center gap-1">
                  <span>{c.name}</span>
                  <button type="button" onClick={() => toggleCriterion(c.id)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className={`w-3 h-3 ${
                        selectedCriteria.includes(c.id)
                          ? "text-white"
                          : "text-white/50"
                      }`}
                    >
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-.293.707L11 12.414V16a1 1 0 01-1.447.894L8 15v-2.586L3.293 6.707A1 1 0 013 6V4z" />
                    </svg>
                  </button>
                </div>
              </th>
            ))}
            <th className="hidden">Average</th>
          </tr>
        </thead>
        <tbody>
          {displayedAgents.map((agent) => (
            <tr key={agent.name} className="odd:bg-white even:bg-background-blue/10 dark:odd:bg-gray-800 dark:even:bg-gray-700">
              <td className="px-4 py-2">
                <button
                  type="button"
                  onClick={() => onAgentClick(agent)}
                  className="underline text-left"
                >
                  {agent.name}
                </button>
              </td>
              <td className="px-4 py-2">
                <a
                  href={agent.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  {agent.website}
                </a>
              </td>
              <td className="px-4 py-2">{agent.developer}</td>
              <td className="px-4 py-2">
                {categorizePricing(agent.pricing_model)}
              </td>
              {criteria.map((c) => (
                <td key={c.id} className="px-2 py-2 text-center">
                  {renderStars(
                    ratings[getAgentKey(agent.name)]?.[c.id]?.rating
                  )}
                </td>
              ))}
              <td className="hidden">
                {agent._avg !== null ? agent._avg.toFixed(2) : ""}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
});

export default AgentTable;
