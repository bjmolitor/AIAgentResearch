import AgentTable from "./components/AgentTable";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-100 p-4">
        <h1 className="text-2xl font-bold text-stratos-blue">AI Agent Research</h1>
      </header>
      <main className="flex-grow p-4">
        <AgentTable />
      </main>
      <footer className="bg-gray-100 p-4 text-center">
        <p className="text-stratos-blue">&copy; 2024 AI Agent Research</p>
      </footer>
    </div>
  );
}

export default App;
