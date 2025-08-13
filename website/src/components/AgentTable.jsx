import { useEffect, useState } from "react";

function AgentTable() {
  const [agents, setAgents] = useState([]);

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

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm text-stratos-blue border border-background-blue">
        <thead className="bg-background-blue text-white">
          <tr>
            <th className="px-4 py-2 font-archia">Name</th>
            <th className="px-4 py-2 font-archia">Developer</th>
            <th className="px-4 py-2 font-archia">Pricing</th>
          </tr>
        </thead>
        <tbody>
          {agents.map((agent) => (
            <tr key={agent.name} className="odd:bg-white even:bg-background-blue/10">
              <td className="px-4 py-2"><a href={agent.website} className="underline" target="_blank" rel="noopener noreferrer">{agent.name}</a></td>
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
