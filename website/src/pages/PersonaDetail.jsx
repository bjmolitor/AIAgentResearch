import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import AgentTable from "../components/AgentTable";

function PersonaDetail({ onAgentClick }) {
  const { id } = useParams();
  const [persona, setPersona] = useState(null);
  const [recommendedAgents, setRecommendedAgents] = useState([]);

  useEffect(() => {
    async function loadPersona() {
      try {
        const res = await fetch('/personas.json');
        if (!res.ok) {
          throw new Error('Failed to fetch persona data');
        }
        const data = await res.json();
        const content = data[id];
        if (!content) return;

        const keyCriteriaStart = content.indexOf('### Key Criteria');
        const recommendedStart = content.indexOf('## Recommended Tools');
        const whyStart = content.indexOf('## Why These Tools');

        const title = content.substring(0, content.indexOf('\n')).replace(/^#\s*/, '');
        const description = content.substring(content.indexOf('\n') + 2, keyCriteriaStart).trim();

        const keyCriteriaText = content.substring(keyCriteriaStart, recommendedStart).trim();
        const keyCriteria = keyCriteriaText
          .split('\n')
          .slice(1)
          .filter((l) => l.startsWith('-'))
          .map((l) => l.replace(/^-\s*/, ''));

        const recommendedText = content.substring(recommendedStart, whyStart).trim();
        const recommendedLines = recommendedText
          .split('\n')
          .slice(1)
          .filter((l) => l.startsWith('-'))
          .map((l) => l.replace(/^-\s*/, ''));
        const recommendedNames = recommendedLines.map((line) => {
          const match = line.match(/\*\*(.+?)\*\*/);
          return match ? match[1] : line;
        });

        const whyText = content.substring(whyStart).trim();
        const whyLines = whyText
          .split('\n')
          .slice(1)
          .filter((l) => l.startsWith('-'))
          .map((l) => l.replace(/^-\s*/, ''));

        setPersona({ title, description, keyCriteria, recommendedLines, whyLines });
        setRecommendedAgents(recommendedNames);
      } catch (err) {
        console.error(err);
      }
    }

    loadPersona();
  }, [id]);

  if (!persona) {
    return <div className="text-stratos-blue">Loading...</div>;
  }

  return (
    <div className="text-stratos-blue">
      <Link to="/" className="underline">&larr; Back</Link>
      <h2 className="text-2xl font-archia mb-4">{persona.title}</h2>
      <p className="mb-4">{persona.description}</p>
      <h3 className="text-xl font-archia mb-2">Key Criteria</h3>
      <ul className="list-disc pl-5 mb-4">
        {persona.keyCriteria.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <h3 className="text-xl font-archia mb-2">Recommended Tools</h3>
      <ul className="list-disc pl-5 mb-4">
        {persona.recommendedLines.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
      <h3 className="text-xl font-archia mb-2">Why These Tools</h3>
      <ul className="list-disc pl-5 mb-4">
        {persona.whyLines.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
      <h3 className="text-xl font-archia mb-2">Recommended Agents</h3>
      <AgentTable onAgentClick={onAgentClick} filterNames={recommendedAgents} />
    </div>
  );
}

export default PersonaDetail;
