import { useEffect, useState } from "react";

function AgentDetailModal({ agent, onClose }) {
  const [ratings, setRatings] = useState({});
  const [criteria, setCriteria] = useState([]);

  useEffect(() => {
    async function loadData() {
      try {
        const [ratingsRes, criteriaRes] = await Promise.all([
          fetch("/persona_ratings.json"),
          fetch("/persona_criteria.json"),
        ]);
        if (!ratingsRes.ok || !criteriaRes.ok) {
          throw new Error("Failed to fetch ratings data");
        }
        const [ratingsData, criteriaData] = await Promise.all([
          ratingsRes.json(),
          criteriaRes.json(),
        ]);
        setRatings(ratingsData);
        setCriteria(criteriaData);
      } catch (err) {
        console.error(err);
      }
    }

    if (agent) {
      loadData();
    }
  }, [agent]);

  if (!agent) return null;

  const renderStars = (rating) => {
    if (!rating) return "☆☆☆☆☆";
    const filled = "★".repeat(rating);
    const empty = "☆".repeat(5 - rating);
    return filled + empty;
  };

  const agentKey = agent.name
    ?.toLowerCase()
    .replace(/\s+/g, "_");
  const agentRatings = ratings[agentKey] || {};

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-background-blue text-white p-6 rounded-md shadow-lg w-[90vw] max-h-full overflow-y-auto">
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
        <p className="mb-2"><span className="font-archia">Pricing:</span> {agent.pricing_model}</p>
        <div className="mb-4">
          <a
            href={agent.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-sparky-blue text-stratos-blue px-4 py-2 rounded font-archia"
          >
            Visit Website
          </a>
        </div>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="border border-sparky-blue p-4 flex-1">
            <h3 className="font-archia mb-2">Description</h3>
            <p className="text-sm">
              {agent.description || "No description available."}
            </p>
          </div>
          <div className="border border-sparky-blue p-4 flex-1">
            <h3 className="font-archia mb-2">
              Supported Models & Key Features
            </h3>
            <div className="text-sm space-y-4">
              <div>
                <h4 className="font-archia mb-1">Supported Models</h4>
                <ul className="list-disc list-inside space-y-1">
                  {agent.supported_models?.map((model, index) => (
                    <li key={index}>{model}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-archia mb-1">Key Features</h4>
                <ul className="list-disc list-inside space-y-1">
                  {agent.key_features?.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {criteria.map((c) => {
            const info = agentRatings[c.id] || {};
            return (
              <div key={c.id} className="border border-sparky-blue p-4">
                <div className="font-archia mb-2">
                  {c.name}: {renderStars(info.rating)}
                </div>
                <p className="text-sm">
                  {info.reasoning || "No reasoning provided."}
                </p>
              </div>
            );
          })}
        </div>
        <div className="text-right">
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

