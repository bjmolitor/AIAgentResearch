import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PersonasOverlay({ isOpen, onClose }) {
  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    if (!isOpen) return;

    async function loadPersonas() {
      try {
        const response = await fetch('/personas.json');
        if (!response.ok) {
          throw new Error('Failed to fetch persona data');
        }
        const data = await response.json();
        const formatted = Object.entries(data).map(([id, content]) => {
          const paragraphs = content.split("\n\n");
          const title = paragraphs[0].replace(/^#\s*/, '');
          const description = paragraphs[1] || '';
          return { id, title, description };
        });
        setPersonas(formatted);
      } catch (err) {
        console.error(err);
      }
    }

    loadPersonas();
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-background-blue dark:bg-gray-800 text-white p-6 rounded-md shadow-lg max-w-5xl w-full max-h-full overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-archia">Select a Persona</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-sparky-blue"
            aria-label="Close"
          >
            &times;
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {personas.map((persona) => (
            <Link
              key={persona.id}
              to={`/personas/${persona.id}`}
              onClick={onClose}
              className="bg-sparky-blue text-background-blue dark:bg-gray-700 dark:text-white p-4 rounded"
            >
              <h3 className="font-archia text-lg mb-2">{persona.title}</h3>
              <p className="text-sm">{persona.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PersonasOverlay;

