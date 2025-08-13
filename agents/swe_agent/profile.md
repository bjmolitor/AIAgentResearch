# Open SWE

## Overview

Open SWE is an open-source, asynchronous coding agent from LangChain. Built on the LangGraph framework, it autonomously analyzes repositories, plans changes, and implements code updates while running in a cloud-hosted sandbox.

## Key Information

- **Developer:** LangChain
- **Website:** [https://github.com/langchain-ai/open-swe](https://github.com/langchain-ai/open-swe)
- **Pricing:** Open-source; hosted demo requires users to supply their own LLM API keys.

## Key Features

- **Planning with human approval:** Generates a detailed execution plan that users can accept, modify, or reject.
- **Multi-agent architecture:** Manager, Planner, Programmer, and Reviewer agents coordinate to complete tasks.
- **End-to-end GitHub workflow:** Automatically creates issues, runs tests, reviews its own changes, and opens pull requests.
- **Parallel cloud execution:** Tasks run asynchronously in a sandbox and multiple jobs can execute in parallel.
- **Real-time feedback:** Users can message the agent during planning or execution to guide progress.

## Supported Models

- Anthropic Claude models (user-provided API key; other LLMs can be configured)

## Benchmarks

- **SWE-bench score:** Not available
- **Task Success Rate:** Not available
- **Resource Usage:** Not available

## Qualitative Assessment

- **Ease of Use:** High
- **Documentation Quality:** High
- **Onboarding Experience:** Straightforward

## Pricing

Open SWE is free and open-source. The hosted demo at [swe.langchain.com](https://swe.langchain.com/) requires users to pay for LLM usage via their API keys.

## Getting Started

Visit the [GitHub repository](https://github.com/langchain-ai/open-swe) for source code and documentation, or try the [public demo](https://swe.langchain.com/) after providing your LLM API keys.

