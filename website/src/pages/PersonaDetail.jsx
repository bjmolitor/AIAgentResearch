import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import AgentTable from "../components/AgentTable";
import { getAgentKey } from "../utils/agentKey";

function PersonaDetail({ onAgentClick }) {
  const { id } = useParams();
  const [persona, setPersona] = useState(null);
  const [recommendedAgents, setRecommendedAgents] = useState([]);

  const renderMarkdown = (text) => ({
    __html: text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
  });

  useEffect(() => {
    async function loadPersona() {
      try {
        const [personaRes, criteriaRes, ratingsRes] = await Promise.all([
          fetch("/personas.json"),
          fetch("/persona_criteria.json"),
          fetch("/persona_ratings.json"),
        ]);
        if (!personaRes.ok || !criteriaRes.ok || !ratingsRes.ok) {
          throw new Error("Failed to fetch persona data");
        }
        const [data, criteriaData, ratingsData] = await Promise.all([
          personaRes.json(),
          criteriaRes.json(),
          ratingsRes.json(),
        ]);
        const content = data[id];
        if (!content) return;

        const keyCriteriaStart = content.indexOf("### Key Criteria");
        const recommendedStart = content.indexOf("## Recommended Tools");
        const whyStart = content.indexOf("## Why These Tools");

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

        const recommendedText = content
          .substring(recommendedStart, whyStart)
          .trim();
        const recommendedLines = recommendedText
          .split("\n")
          .slice(1)
          .filter((l) => l.startsWith("-"))
          .map((l) => l.replace(/^-\s*/, ""));
        const recommendedNames = recommendedLines.map((line) => {
          const match = line.match(/\*\*(.+?)\*\*/);
          return match ? match[1] : line;
        });

        const whyText = content.substring(whyStart).trim();
        const whyLines = whyText
          .split("\n")
          .slice(1)
          .filter((l) => l.startsWith("-"))
          .map((l) => l.replace(/^-\s*/, ""));

        const personaCriteriaIds = criteriaData
          .filter((c) => c.personas.includes(title))
          .map((c) => c.id);

        const sortedNames = [...recommendedNames]
          .sort((a, b) => {
            const aAvg =
              personaCriteriaIds.reduce(
                (sum, id) =>
                  sum + (ratingsData[getAgentKey(a, ratingsData)]?.[id]?.rating || 0),
                0
              ) / personaCriteriaIds.length;
            const bAvg =
              personaCriteriaIds.reduce(
                (sum, id) =>
                  sum + (ratingsData[getAgentKey(b, ratingsData)]?.[id]?.rating || 0),
                0
              ) / personaCriteriaIds.length;
            return bAvg - aAvg;
          })
          .slice(0, 4);

        setPersona({ title, description, keyCriteria, whyLines });
        setRecommendedAgents(sortedNames);
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
      <Link to="/" className="underline">
        &larr; Back
      </Link>
      <div className="border border-background-blue p-4 mb-4">
        <h2 className="text-2xl font-archia mb-2">{persona.title}</h2>
        <p className="mb-0">{persona.description}</p>
      </div>
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <div className="border border-background-blue p-4 flex-1">
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
        <div className="border border-background-blue p-4 flex-1">
          <h3 className="text-xl font-archia mb-2">Why These Tools</h3>
          <ul className="list-disc pl-5">
            {persona.whyLines.map((line) => (
              <li
                key={line}
                dangerouslySetInnerHTML={renderMarkdown(line)}
              />
            ))}
          </ul>
        </div>
      </div>
      <h3 className="text-xl font-archia mb-2">Recommended Agents</h3>
      <AgentTable onAgentClick={onAgentClick} filterNames={recommendedAgents} />
    </div>
  );
}

export default PersonaDetail;

