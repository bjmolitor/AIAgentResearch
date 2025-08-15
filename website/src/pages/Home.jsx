import { useState, useRef } from "react";
import AgentTable from "../components/AgentTable";

function Home({ onAgentClick, onOpenPersonas }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [showExport, setShowExport] = useState(false);
  const tableRef = useRef(null);

  return (
    <div>
      <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center">
        <button
          type="button"
          onClick={onOpenPersonas}
          className="bg-stratos-blue text-white px-4 py-2 rounded font-archia"
        >
          Can you recommend something?
        </button>
        <div className="relative">
          <button
            type="button"
            onClick={() => setShowExport((v) => !v)}
            className="bg-stratos-blue text-white px-4 py-2 rounded font-archia"
          >
            Export
          </button>
          {showExport && (
            <div className="absolute z-10 mt-1 bg-white border rounded shadow">
              <button
                type="button"
                className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                onClick={() => {
                  tableRef.current?.exportData("json");
                  setShowExport(false);
                }}
              >
                JSON
              </button>
              <button
                type="button"
                className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                onClick={() => {
                  tableRef.current?.exportData("csv");
                  setShowExport(false);
                }}
              >
                CSV
              </button>
              <button
                type="button"
                className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                onClick={() => {
                  tableRef.current?.exportData("md");
                  setShowExport(false);
                }}
              >
                Markdown
              </button>
            </div>
          )}
        </div>
        <input
          type="text"
          placeholder="Search agents..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border px-2 py-1 rounded font-archia text-stratos-blue"
        />
      </div>
      <AgentTable
        ref={tableRef}
        onAgentClick={onAgentClick}
        searchTerm={searchTerm}
      />
    </div>
  );
}

export default Home;
