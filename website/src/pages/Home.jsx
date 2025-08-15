import { useState } from "react";
import AgentTable from "../components/AgentTable";
import ThemeSelector from "../components/ThemeSelector";

function Home({ onAgentClick, onOpenPersonas }) {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={onOpenPersonas}
            className="bg-stratos-blue text-white px-4 py-2 rounded font-archia dark:bg-sparky-blue dark:text-gray-900"
          >
            Can you recommend something?
          </button>
          <input
            type="text"
            placeholder="Search agents..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border px-2 py-1 rounded font-archia text-stratos-blue dark:text-gray-100 dark:bg-gray-800 dark:border-gray-700"
          />
        </div>
        <ThemeSelector />
      </div>
      <AgentTable onAgentClick={onAgentClick} searchTerm={searchTerm} />
    </div>
  );
}

export default Home;
