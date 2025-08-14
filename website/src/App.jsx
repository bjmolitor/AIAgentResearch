import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AgentDetailModal from "./components/AgentDetailModal";
import PersonasOverlay from "./components/PersonasOverlay";
import Home from "./pages/Home";
import PersonaDetail from "./pages/PersonaDetail";

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
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-2xl font-bold text-stratos-blue">Open AI Agent Research</h1>
          <a
            href="https://github.com/bjmolitor/AIAgentResearch"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stratos-blue underline"
          >
            (MIT licensed - contributors wanted.)
          </a>
        </div>
      </header>
      <main className="flex-grow p-4">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                onAgentClick={handleAgentClick}
                onOpenPersonas={handleOpenPersonas}
              />
            }
          />
          <Route
            path="/personas/:id"
            element={<PersonaDetail onAgentClick={handleAgentClick} />}
          />
        </Routes>
      </main>
      <footer className="bg-gray-100 p-4 text-center">
        <p className="text-stratos-blue">&copy; 2024 Open AI Agent Research</p>
      </footer>
      <AgentDetailModal agent={selectedAgent} onClose={handleCloseModal} />
      <PersonasOverlay isOpen={showPersonas} onClose={handleClosePersonas} />
    </div>
  );
}

export default App;
