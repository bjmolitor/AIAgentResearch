import { useEffect, useState } from "react";

function AgentTable({ onAgentClick, filterNames, searchTerm = "" }) {
  const [agents, setAgents] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  useEffect(() => {
    async function loadAgents() {
      try {
        const response = await fetch('/agents.json');
        if (!response.ok) {
          throw new Error('Failed to fetch agent data');
        }
        const data = await response.json();
        setAgents(data);
      } catch (err) {
        console.error(err);
      }
    }

    loadAgents();
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AgentTable;
