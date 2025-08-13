# AI Agent Comparison

This repository contains a curated list of AI agents, categorized and profiled to provide a comprehensive overview of the current landscape. The goal of this project is to offer a structured and detailed comparison of various AI agents, focusing on their features, capabilities, and benchmarks.

## Project Structure

The repository is organized as follows:

- **Agent JSON files**: Each agent's subdirectory contains a structured `agent_<name>.json` file with all collected data about that agent. These files conform to `agents.schema.json` and serve as the source of truth for the repository.

- **`agents/`**: This directory contains individual folders for each AI agent. Every folder includes the `agent_<name>.json` file and a `profile.md` with a human-readable summary.

- **`VISION.md`**: This document outlines the long-term vision for this project, including plans for automated research and report generation.

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
- CodeWP (`agents/CodeWP`)
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
- Google Vertex AI Engine (`agents/google_vertex_ai_engine`)
- Jules (`agents/Jules`)
- manus (`agents/manus`)
- Minimax agent (`agents/Minimax_agent`)
- Trae (`agents/Trae`)
- z.ai (`agents/z.ai`)
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
3.  **Create or update the corresponding `profile.md` file.** This can be done manually or with a script that generates the Markdown from the JSON data.
4.  **Submit a pull request.**

Please ensure that your contributions are well-documented and follow the existing structure of the project.
