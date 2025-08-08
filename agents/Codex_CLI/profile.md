# Codex CLI

## Overview
Codex CLI is an open-source coding agent from OpenAI that runs locally on your computer and interacts with your terminal.

## Key Information
- **Developer:** OpenAI
- **Website:** [https://github.com/openai/codex](https://github.com/openai/codex)
- **Pricing:** Requires an OpenAI API key or paid ChatGPT plan; usage billed per model tokens.

## Key Features
- Runs entirely in the terminal with chat-driven development.
- Can read, modify, and run code locally with optional auto-approval.
- Supports open-source models and the Model Context Protocol (MCP).

## Supported Models
- Any model accessible through the OpenAI Responses API (defaults to o4-mini).

## Benchmarks
- **Terminal-Bench Accuracy:** 20.0% ± 1.5 – [Terminal-Bench Leaderboard](https://www.tbench.ai/leaderboard)
- **Task Success Rate:** 0.20 (from Terminal-Bench accuracy)
- **Resource Usage:** Runs locally; resource usage depends on the chosen model and tasks.
- **SWE-bench score:** Not publicly available as of May 2025.

## Qualitative Assessment
- **Ease of Use:** High – simple installation via npm or Homebrew.
- **Documentation Quality:** High – detailed README with quickstart, configuration, and examples.
- **Onboarding Experience:** Moderate – requires OpenAI credentials and initial configuration.

## Missing Data
No official SWE-bench results or standardized resource usage metrics have been published for Codex CLI as of May 2025.
