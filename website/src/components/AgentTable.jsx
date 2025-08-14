import { useEffect, useState } from "react";

function AgentTable({ onAgentClick, filterNames, searchTerm = "" }) {
  const [agents, setAgents] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [ratings, setRatings] = useState({});
  const [criteria, setCriteria] = useState([]);

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

  const filteredByNames = filterNames
    ? agents.filter(
        (a) =>
          filterNames.includes(a.name) ||
          filterNames.includes(a.name.replace(/\s+/g, '_'))
      )
    : agents;

  const filteredAgents = searchTerm
    ? filteredByNames.filter((a) =>
        a.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : filteredByNames;

  const sortedAgents = sortConfig.key
    ? [...filteredAgents].sort((a, b) => {
        const aValue = a[sortConfig.key] || "";
        const bValue = b[sortConfig.key] || "";
        if (aValue < bValue) {
          return sortConfig.direction === "asc" ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === "asc" ? 1 : -1;
        }
        return 0;
      })
    : filteredAgents;

  const renderStars = (rating) => {
    if (!rating) return "☆☆☆☆☆";
    const filled = "★".repeat(rating);
    const empty = "☆".repeat(5 - rating);
    return filled + empty;
  };

  const getAgentKey = (name) =>
    name?.toLowerCase().replace(/\s+/g, "_");

  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction:
        prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
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
                {c.name}
              </th>
            ))}
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AgentTable;
