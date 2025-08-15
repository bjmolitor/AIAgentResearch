import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import AgentTable from "../components/AgentTable";

function PersonaDetail({ onAgentClick }) {
  const { id } = useParams();
  const [persona, setPersona] = useState(null);

  const renderMarkdown = (text) => ({
    __html: text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
  });

  useEffect(() => {
    async function loadPersona() {
      try {
        const [personaRes, criteriaRes] = await Promise.all([
          fetch("/personas.json"),
          fetch("/persona_criteria.json"),
        ]);
        if (!personaRes.ok || !criteriaRes.ok) {
          throw new Error("Failed to fetch persona data");
        }
        const [data, criteriaData] = await Promise.all([
          personaRes.json(),
          criteriaRes.json(),
        ]);
        const content = data[id];
        if (!content) return;

        const keyCriteriaStart = content.indexOf("### Key Criteria");
        const recommendedStart = content.indexOf("## Recommended Tools");

        const title = content
          .substring(0, content.indexOf("\n"))
          .replace(/^#\s*/, "");
        const description = content
          .substring(content.indexOf("\n") + 2, keyCriteriaStart)
          .trim();

        const keyCriteriaText = content
          .substring(keyCriteriaStart, recommendedStart)
          .trim();
        const keyCriteria = keyCriteriaText
          .split("\n")
          .slice(1)
          .filter((l) => l.startsWith("-"))
          .map((l) => l.replace(/^-\s*/, ""));

        const criteriaIds = criteriaData
          .filter((c) => c.personas.includes(title))
          .map((c) => c.id);

        setPersona({ title, description, keyCriteria, criteriaIds });
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
    <div className="text-stratos-blue dark:text-white">
      <Link to="/" className="underline">
        &larr; Back
      </Link>
      <div className="border border-background-blue dark:border-gray-700 p-4 mb-4">
        <h2 className="text-2xl font-archia mb-2">{persona.title}</h2>
        <p className="mb-4">{persona.description}</p>
        <h3 className="text-xl font-archia mb-2">Key Criteria</h3>
        <ul className="list-disc pl-5">
          {persona.keyCriteria.map((item) => (
            <li
              key={item}
              dangerouslySetInnerHTML={renderMarkdown(item)}
            />
          ))}
        </ul>
      </div>
      <h3 className="text-xl font-archia mb-2">Recommended Agents</h3>
      <AgentTable
        onAgentClick={onAgentClick}
        initialCriteria={persona.criteriaIds}
        limit={5}
      />
    </div>
  );
}

export default PersonaDetail;
