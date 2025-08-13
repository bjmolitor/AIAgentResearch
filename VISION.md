# Vision: The AI Agent Benchmarking Report

The long-term objective is to cultivate a deep, shared research foundation on AI coding agents and ultimately surface that knowledge through a public leaderboard-style website. The project begins by collecting and organizing reliable information about existing agents into a structured dataset and written report.

The goal is to produce a comprehensive, well-structured Markdown report that compares different AI agents. This report will be generated automatically based on web research.

### 1. Structure and Categories

The report will be structured around the distinct categories of AI agents:

*   **Terminal-Based Agents:** Standalone command-line tools (e.g., Claude Code, Gemini CLI).
*   **IDE-Embedded Agents:** Extensions within an Integrated Development Environment (e.g., Roo Code, Cursor).
*   **Web & Virtualized Agents:** Agents with web interfaces and/or their own virtualized environments (e.g., Jules, Devin).
*   **Agent Frameworks:** Libraries for building multi-agent systems (e.g., CrewAI, LangChain).

### 2. Data Points for Each Agent

For each agent, the following information will be researched and included:

*   **Basic Info:** Name, Website, Developer/Company.
*   **Key Features:** A list of standout features discovered from their websites or documentation.
*   **Supported Models:** The underlying LLMs the agent can use.
*   **Pricing:** A summary of the pricing model.
*   **Published Benchmarks:** Any publicly available benchmark scores (e.g., SWE-Bench, Chatbot Arena) found through web research.

### 3. Final Output

The project will deliver two key artifacts:

*   **Agent JSON files:** A collection of `agent_<name>.json` files (one per agent) stored in the `agents/` directory, containing all the raw data collected.
*   **`REPORT.md`:** A human-readable Markdown report that presents the data from these JSON files in a clear, comparative format.

---

## Automated Research Process

This process is designed to be executed by an AI agent (like Jules) in a single, automated run that takes hours, not weeks. The agent will perform the research and generate the final report.

### Step 1: Initialization

*   The agent scans the `agents/` directory to load the list of agent JSON files.

### Step 2: AI-Powered Web Research

*   For each `agent_<name>.json` file, the agent will:
    1.  Perform a Google search to find the official website.
    2.  Visit the website to gather **Basic Info**, **Key Features**, **Supported Models**, and **Pricing**.
    3.  Perform additional targeted searches for published benchmark data (e.g., `"Cursor agent SWE-Bench score"`, `"CrewAI performance review"`).
    4.  Populate the collected information back into the corresponding `agent_<name>.json` file.

### Step 3: Report Generation

*   Once the research phase is complete for all agents, the agent will:
    1.  Read all populated `agent_<name>.json` files.
    2.  Generate a new file, `REPORT.md`.
    3.  Format the data into clear, comparative tables within the Markdown file, organized by category.

### Step 4: Completion

*   The agent's work is complete when all `agent_<name>.json` files are fully populated and `REPORT.md` is generated. This process requires minimal human intervention.

## Toward a Public Leaderboard

With the research corpus established, the next phase is to translate the data into an interactive website. This site will present agents in a leaderboard format, allow filtering by category or benchmark results, and be updated as new research findings are added.
