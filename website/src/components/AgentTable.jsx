import { useEffect, useState } from "react";

function AgentTable({ onAgentClick, filterNames, searchTerm = "" }) {
  const [agents, setAgents] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [ratings, setRatings] = useState({});
  const [criteria, setCriteria] = useState([]);
  const [selectedCriteria, setSelectedCriteria] = useState([]);

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
        return { key: null, direction: "asc" };
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
          sortConfig.key === "_avg" ? a._avg ?? -1 : a[sortConfig.key] || "";
        const bValue =
          sortConfig.key === "_avg" ? b._avg ?? -1 : b[sortConfig.key] || "";
        if (aValue < bValue) {
          return sortConfig.direction === "asc" ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === "asc" ? 1 : -1;
        }
        return 0;
      })
    : agentsWithAverage;

  const renderStars = (rating) => {
    if (!rating) return "☆☆☆☆☆";
    const filled = "★".repeat(rating);
    const empty = "☆".repeat(5 - rating);
    return filled + empty;
  };

  const getAgentKey = (name) => {
    if (!name) return "";
    const lower = name.toLowerCase();
    const base = lower.split(".")[0];
    const withSpaces = base.replace(/\s+/g, "_");
    const sanitized = withSpaces.replace(/[^a-z0-9_]/g, "_");
    const candidates = [sanitized, lower, withSpaces];
    return candidates.find((k) => ratings[k]) || sanitized;
  };

  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction:
        prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  const toggleCriterion = (id) => {
    setSelectedCriteria((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm text-stratos-blue border border-background-blue">
        <thead className="bg-background-blue text-white">
          <tr>
            <th
              className="px-4 py-2 font-archia cursor-pointer"
              onClick={() => handleSort("name")}
            >
              Name
            </th>
            <th
              className="px-4 py-2 font-archia cursor-pointer"
              onClick={() => handleSort("developer")}
            >
              Developer
            </th>
            <th
              className="px-4 py-2 font-archia cursor-pointer"
              onClick={() => handleSort("pricing_model")}
            >
              Pricing
            </th>
            {criteria.map((c) => (
              <th key={c.id} className="px-2 py-2 font-archia">
                <div className="flex items-center justify-center gap-1">
                  <span
                    className="cursor-pointer"
                    onClick={() => handleSort("_avg")}
                  >
                    {c.name}
                  </span>
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
          {sortedAgents.map((agent) => (
            <tr key={agent.name} className="odd:bg-white even:bg-background-blue/10">
              <td className="px-4 py-2">
                <button
                  type="button"
                  onClick={() => onAgentClick(agent)}
                  className="underline text-left"
                >
                  {agent.name}
                </button>
              </td>
              <td className="px-4 py-2">{agent.developer}</td>
              <td className="px-4 py-2">{agent.pricing_model}</td>
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
}

export default AgentTable;
