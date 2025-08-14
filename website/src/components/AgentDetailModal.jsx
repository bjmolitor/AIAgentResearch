function AgentDetailModal({ agent, onClose }) {
  if (!agent) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-background-blue text-white p-6 rounded-md shadow-lg max-w-lg w-full overflow-y-auto max-h-full">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-archia">{agent.name}</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-sparky-blue"
            aria-label="Close"
          >
            &times;
          </button>
        </div>
        <p className="mb-2"><span className="font-archia">Developer:</span> {agent.developer}</p>
        <p className="mb-4"><span className="font-archia">Pricing:</span> {agent.pricing_model}</p>
        <div className="mb-4">
          <h3 className="font-archia mb-1">Key Features:</h3>
          <ul className="list-disc list-inside text-sm space-y-1">
            {agent.key_features?.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="font-archia mb-1">Supported Models:</h3>
          <ul className="list-disc list-inside text-sm space-y-1">
            {agent.supported_models?.map((model, index) => (
              <li key={index}>{model}</li>
            ))}
          </ul>
        </div>
        <div className="text-right">
          <a
            href={agent.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-sparky-blue text-stratos-blue px-4 py-2 rounded font-archia mr-2"
          >
            Visit Website
          </a>
          <button
            onClick={onClose}
            className="bg-sparky-blue text-stratos-blue px-4 py-2 rounded font-archia"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default AgentDetailModal;

