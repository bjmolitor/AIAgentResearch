import { useState } from "react";
import AgentTable from "./components/AgentTable";
import AgentDetailModal from "./components/AgentDetailModal";
import PersonasOverlay from "./components/PersonasOverlay";

function App() {
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [showPersonas, setShowPersonas] = useState(false);

  const handleAgentClick = (agent) => {
    setSelectedAgent(agent);
  };

  const handleCloseModal = () => {
    setSelectedAgent(null);
  };

  const handleOpenPersonas = () => {
    setShowPersonas(true);
  };

  const handleClosePersonas = () => {
    setShowPersonas(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-100 p-4">
        <h1 className="text-2xl font-bold text-stratos-blue">AI Agent Research</h1>
      </header>
      <main className="flex-grow p-4">
        <div className="mb-4">
          <button
            type="button"
            onClick={handleOpenPersonas}
            className="bg-stratos-blue text-white px-4 py-2 rounded font-archia"
          >
            Can you recommend something?
          </button>
        </div>
        <AgentTable onAgentClick={handleAgentClick} />
      </main>
      <footer className="bg-gray-100 p-4 text-center">
        <p className="text-stratos-blue">&copy; 2024 AI Agent Research</p>
      </footer>
      <AgentDetailModal agent={selectedAgent} onClose={handleCloseModal} />
      <PersonasOverlay isOpen={showPersonas} onClose={handleClosePersonas} />
    </div>
  );
}

export default App;
