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
- Claude Code
- Codex CLI
- Gemini CLI
- Goose
- LogiQCLI
- Qwen CLI
- Warp
- OpenAI Codex
- Aider

### IDE-Embedded Agents
- Amazon CodeGuru
- Amazon CodeWhisperer
- Android Studio Bot
- AskCodi
- Cline
- CodeGPT
- CodeWP
- Cursor
- DeepCode AI
- Figma Make
- GitHub Copilot
- Kilo
- Replit AI
- Roo Code
- Sourcegraph Cody
- SQLAI.ai
- Tabnine

### Web & Virtualized Agents
- ChatGPT agent
- devin
- enginelabs
- Google Vertex AI Engine
- Jules
- manus
- Minimax agent
- Trae
- z.ai
- chat.z.ai
- Perplexity

### Agent Frameworks
- CrewAI
- LangChain
- LangGraph
- Letta
- mini-SWE-agent
- OpenHands
- SWE-agent
- Terminus

## Contributing

Contributions to this project are welcome. If you would like to add a new agent or update the information for an existing one, please follow these steps:

1.  **Fork the repository.**
2.  **Add or update the agent's data in the appropriate `agent_<name>.json` file inside `agents/<name>/`.** Please ensure that the data is accurate and well-sourced.
3.  **Create or update the corresponding `profile.md` file.** This can be done manually or with a script that generates the Markdown from the JSON data.
4.  **Submit a pull request.**

Please ensure that your contributions are well-documented and follow the existing structure of the project.
