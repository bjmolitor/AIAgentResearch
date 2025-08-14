import AgentTable from "../components/AgentTable";

function Home({ onAgentClick, onOpenPersonas }) {
  return (
    <div>
      <div className="mb-4">
        <button
          type="button"
          onClick={onOpenPersonas}
          className="bg-stratos-blue text-white px-4 py-2 rounded font-archia"
        >
          Can you recommend something?
        </button>
      </div>
      <AgentTable onAgentClick={onAgentClick} />
    </div>
  );
}

export default Home;
