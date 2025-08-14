# Open AI Agent Research ([MIT licensed – contributors wanted.](https://github.com/bjmolitor/AIAgentResearch))

This repository contains a curated list of AI agents, categorized and profiled to provide a comprehensive overview of the current landscape. The goal of this project is to offer a structured and detailed comparison of various AI agents, focusing on their features, capabilities, and benchmarks.

## We're live!

You can browse the results of this research on our website: [https://aiagentresearch.netlify.app/](https://aiagentresearch.netlify.app/)

The website provides a comprehensive overview of the AI agents that have been profiled. It features:

*   **An Agent Leaderboard:** A table view of all the agents, with key information such as their category, benchmarks, and a link to their homepage.
*   **Detailed Agent Pages:** Clicking on an agent's name opens a detailed view with more information about the agent, including its key features, supported models, and persona ratings.
*   **Persona-Based Recommendations:** A "Can you recommend something?" feature that helps users find the best agent for their needs based on their user persona.

## Project Structure

The repository is organized as follows:

- **`agents/`**: This directory contains individual folders for each AI agent. Every folder includes an `agent_<name>.json` file with structured data about the agent, a `profile.md` with a human-readable summary, and a `persona_ratings_<name>.json` file with the agent's ratings for different user personas.

- **`website/`**: This directory contains the source code for the project's website. The website is a React application that displays the data from the `agents/` directory in a user-friendly way. It also includes the consolidated JSON files that are used to populate the website.

- **`VISION.md`**: This document outlines the long-term vision for this project.

## Profiled Agents

The following agents have been profiled in this repository:

### Terminal-Based Agents
- Claude Code (`agents/Claude_Code`)
- Codex CLI (`agents/Codex_CLI`)
- Gemini CLI (`agents/Gemini_CLI`)
- Goose (`agents/Goose`)
- LogiQCLI (`agents/LogiQCLI`)
- Qwen CLI (`agents/Qwen_CLI`)
- Warp (`agents/Warp`)
- OpenAI Codex (`agents/OpenAI_Codex`)
- Aider (`agents/Aider`)

### IDE-Embedded Agents
- Amazon CodeGuru (`agents/Amazon_CodeGuru`)
- Amazon CodeWhisperer (`agents/Amazon_CodeWhisperer`)
- Android Studio Bot (`agents/Android_Studio_Bot`)
- AskCodi (`agents/AskCodi`)
- Cline (`agents/Cline`)
- CodeGPT (`agents/CodeGPT`)
- Cursor (`agents/Cursor`)
- DeepCode AI (`agents/DeepCode_AI`)
- GitHub Copilot (`agents/GitHub_Copilot`)
- Kilo (`agents/Kilo`)
- Replit AI (`agents/Replit_AI`)
- Roo Code (`agents/Roo_Code`)
- Sourcegraph Cody (`agents/Sourcegraph_Cody`)
- SQLAI.ai (`agents/SQLAI`)
- Tabnine (`agents/Tabnine`)

### Web & Virtualized Agents
- ChatGPT agent (`agents/ChatGPT_agent`)
- devin (`agents/devin`)
- enginelabs (`agents/enginelabs`)
- Figma Make (`agents/Figma_Make`)
- Google Vertex AI Engine (`agents/google_vertex_ai_engine`)
- Jules (`agents/Jules`)
- manus (`agents/manus`)
- Minimax agent (`agents/Minimax_agent`)
- Trae (`agents/Trae`)
- chat.z.ai (`agents/chat.z.ai`)
- Perplexity Labs (`agents/Perplexity_Labs`)
- v0.app (`agents/v0.app`)

### Agent Frameworks
- CrewAI (`agents/CrewAI`)
- LangChain (`agents/LangChain`)
- LangGraph (`agents/LangGraph`)
- Letta (`agents/Letta`)
- mini-SWE-agent (`agents/mini-SWE-agent`)
- OpenHands (`agents/OpenHands`)
- SWE-agent (`agents/SWE-agent`)
- Terminus (`agents/Terminus`)

## Contributing

Contributions to this project are welcome. If you would like to add a new agent or update the information for an existing one, please follow these steps:

1.  **Fork the repository.**
2.  **Add or update the agent's data in the appropriate `agent_<name>.json` file inside `agents/<name>/`.** Please ensure that the data is accurate and well-sourced.
3.  **Create or update the corresponding `profile.md` and `persona_ratings_<name>.json` files.**
4.  **Submit a pull request.**

Please ensure that your contributions are well-documented and follow the existing structure of the project.
