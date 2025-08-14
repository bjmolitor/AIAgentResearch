# Vision: The AI Agent Benchmarking Report

The long-term objective is to cultivate a deep, shared research foundation on AI coding agents and ultimately surface that knowledge through a public leaderboard-style website. The first round of research has been completed, resulting in a structured dataset and a live website.

The goal is to produce a comprehensive, well-structured dataset that compares different AI agents. This dataset is then presented on a public website to help users find the best AI agent for their needs.

## The Website

The results of this research are available on our website: [https://aiagentresearch.netlify.app/](https://aiagentresearch.netlify.app/)

The website provides a comprehensive overview of the AI agents that have been profiled. It features:

*   **An Agent Leaderboard:** A table view of all the agents, with key information such as their category, benchmarks, and a link to their homepage.
*   **Detailed Agent Pages:** Clicking on an agent's name opens a detailed view with more information about the agent, including its key features, supported models, and persona ratings.
*   **Persona-Based Recommendations:** A "Can you recommend something?" feature that helps users find the best agent for their needs based on their user persona.

### 1. Structure and Categories

The report is structured around the distinct categories of AI agents:

*   **Terminal-Based Agents:** Standalone command-line tools (e.g., Claude Code, Gemini CLI).
*   **IDE-Embedded Agents:** Extensions within an Integrated Development Environment (e.g., Roo Code, Cursor).
*   **Web & Virtualized Agents:** Agents with web interfaces and/or their own virtualized environments (e.g., Jules, Devin).
*   **Agent Frameworks:** Libraries for building multi-agent systems (e.g., CrewAI, LangChain).

### 2. Data Points for Each Agent

For each agent, the following information has been researched and included:

*   **Basic Info:** Name, Website, Developer/Company.
*   **Key Features:** A list of standout features discovered from their websites or documentation.
*   **Supported Models:** The underlying LLMs the agent can use.
*   **Pricing:** A summary of the pricing model.
*   **Published Benchmarks:** Any publicly available benchmark scores (e.g., SWE-Bench, Chatbot Arena) found through web research.
*   **Persona Ratings:** Ratings for each agent based on a set of predefined user personas.

### 3. Final Output

The project's data is stored in two key formats:

*   **Agent JSON files:** A collection of `agent_<name>.json` files (one per agent) stored in the `agents/` directory, containing all the raw data collected.
*   **Consolidated JSON files:** The data from the individual agent files is consolidated into a few key JSON files in the `website/public` directory. These files are used to populate the website.
