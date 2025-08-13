# Website Base Concept

## Landing Page

The landing page will feature a prominent table view displaying all the agents from the research. This provides users with an immediate and comprehensive overview of the available agents.

### Table View Columns

The table will include the following columns:

- **Agent Name:** The name of the agent.
- **Benchmarking:** Key performance metrics and benchmark results for the agent.
- **Homepage:** A direct link to the agent's official homepage or documentation.
- **Solution Category:** The category of solution the agent falls into (e.g., code generation, data analysis, etc.).

### Agent Detail Pages

Clicking on an agent's name in the table will open an overlay (modal) with a detailed view of that agent. This keeps the user on the main page while allowing them to explore specific agents in depth.

## "Can you recommend something?" Feature

A clear call-to-action button with the text "Can you recommend something?" will be present on the landing page.

### Personas Overlay

Clicking this button will open an overlay that showcases different user personas. Each persona will be represented by a card or a brief description.

### Persona Detail and Recommendations

Clicking on a specific persona will navigate the user to a detailed page for that persona. This page will contain:

- A detailed definition and description of the persona.
- A curated list of recommended agents that are particularly well-suited for this persona's needs.
- The recommendations will be presented as links that, when clicked, open the respective agent's detail page overlay.

## Ideas

- **Interactive Filtering and Sorting:** Allow users to filter and sort the agent table based on different criteria like benchmarking scores, solution category, etc.
- **Comparison Tool:** A feature to select multiple agents from the table and compare their specifications and benchmarks side-by-side.
- **Community Ratings and Reviews:** Incorporate a system for users to rate and review agents, adding a layer of community feedback.
- **Visualizations:** Use charts and graphs to visualize benchmarking data, making it easier to understand and compare agent performance.

## Open Questions

- What specific benchmarking metrics are most important to display in the main table view?
- How should the agent detail pages be structured to best present information? What key details should be included?
- What are the initial set of personas to be defined? How do we gather the information to create these personas?
- Should the "Can you recommend something?" feature be a guided quiz-like experience to narrow down the user's needs before showing personas?
- How will the data for the agents and benchmarks be stored and updated? Is there a backend or a static data source?

## Data Sources

To facilitate the development of the website, the agent and persona data, which is originally spread across multiple files in the repository, has been consolidated into a few key JSON files. These files will serve as the primary data source for the website.

- **`website/agents.json`**: An array of all agent objects, consolidated from the individual `agents/*/agent_*.json` files. This file will power the main agent table on the landing page.
- **`website/persona_ratings.json`**: An object where keys are agent names and values are the corresponding persona rating objects. This will be used to calculate recommendations.
- **`website/personas.json`**: An object where keys are persona names and values are the content of their profile markdown files. This will be used for the "Can you recommend something?" feature.

The website will be a static application (HTML, CSS, JavaScript) that fetches these JSON files to populate its content. This approach simplifies the architecture and leverages the existing data structure of the repository. Any updates to the agent or persona data in the main repository will require a regeneration of these consolidated JSON files.
