# AI Agent Leaderboard Comparison Matrix

This document provides a comparison of different AI agent leaderboards and benchmarks. The goal is to provide a clear overview of the current landscape of AI agents and their performance on various tasks.

## Comparison Criteria

The following criteria are used to compare the leaderboards and benchmarks:

*   **Name:** The name of the leaderboard or benchmark.
*   **Focus/Domain:** The primary area of application for the agents.
*   **Evaluation Metrics:** The key metrics used to rank the agents.
*   **Top Performers:** The leading agents on the leaderboard.
*   **Model Type:** Whether the top agents are open-source or proprietary.
*   **Pricing / Usage Limits:** Information on the cost of using the agent.
*   **Links:** Direct links to the leaderboards and agent websites.
*   **Notes:** Additional information about the leaderboard, such as its status or a summary of its methodology.

## Leaderboard Comparison

| Name | Focus/Domain | Evaluation Metrics | Top Performers | Model Type | Pricing / Usage Limits | Links | Notes |
|---|---|---|---|---|---|---|---|
| **Galileo AI Agent Leaderboard** | Business-oriented tasks (Banking, Healthcare, etc.) | Accuracy (AC), Task Success Quality (TSQ), Cost, Duration | 1. gpt-4.1-2025-04-14<br>2. gpt-4.1-mini-2025-04-14<br>3. claude-sonnet-4-20250514 | Mostly proprietary | Based on model pricing (OpenAI, Anthropic, etc.) | [Leaderboard](https://huggingface.co/spaces/galileo-ai/agent-leaderboard) | Provides detailed breakdown of performance across various industries and includes cost analysis. |
| **SWE-bench** | Software engineering (resolving GitHub issues) | Percentage of issues resolved (% Resolved) | **Verified:**<br>1. mini-SWE-agent (up to 65%)<br>2. Refact.ai Agent (60.00)<br>**Full:**<br>SWE-agent (12.47%) | Mix of proprietary and open-source | Varies by agent | [Leaderboard](https://www.swebench.com/) | Leaderboard data is fragmented and not fully public. Evaluation is private and handled by a CLI tool. |
| **Terminal-Bench** | Terminal-based tasks | Accuracy | 1. Warp<br>2. Engine Labs<br>3. Claude Code | Mostly proprietary models (Anthropic, OpenAI) | Varies by agent | [Leaderboard](https://www.tbench.ai/leaderboard) | A comprehensive leaderboard with detailed information on agents, models, and organizations. |
| **Aider Polyglot** | Multilingual coding tasks | Not specified | Not available | Not available | Not applicable | [Source](https://epoch.ai/benchmarks) | The official leaderboard link is broken (404 error). |
| **GSO (Global Software Optimization)** | Code optimization | Percentage of optimization achieved | Not available | Not available | Not applicable | [Source](https://epoch.ai/benchmarks) | Mentions the use of the **OpenHands** framework. Leaderboard is loaded dynamically. |
| **WebDev Arena** | Web development (using Next.js) | Bradley-Terry model score | Not available | Not available | Not applicable | [Source](https://epoch.ai/benchmarks) | Leaderboard is dynamic and based on user votes. |

## Agent Pricing and Usage

*   **Google Jules:** Currently in public beta and free to use, but with usage limits. More details can be found on the [usage limits page](https://jules.google/docs/usage-limits/).
*   **chat.z.ai:** There is no publicly available information on the pricing or usage limits for this service.
*   **Other Agents:** The pricing for other agents, especially those that are not public-facing products, is not readily available. For agents that are based on proprietary models (e.g., from OpenAI, Anthropic), the cost is determined by the pricing of the underlying models.

## Benchmarking Tools and Frameworks

The following tools and frameworks are commonly used for building and evaluating AI agents:

*   **AgentBench:** A comprehensive suite for testing language agents.
*   **REALM-Bench:** Designed for agents handling real-world reasoning and planning.
*   **ToolFuzz:** Stress-tests the integration of LLMs with third-party tools.
*   **Mosaic AI Evaluation Suite:** A platform for performance monitoring and evaluation.
*   **AutoGen Studio:** A visual platform for simulating and evaluating multi-agent conversations.
*   **LangChain:** A framework for developing applications powered by language models.
*   **AutoGen:** A framework that enables development of LLM applications using multiple agents that can converse with each other to solve tasks.
*   **OpenHands:** A framework for building agents that can perform complex tasks.

## Overview and Ranking

The AI agent landscape is diverse, with different benchmarks focusing on different aspects of agent performance.

*   **For Business Applications:** The **Galileo AI Agent Leaderboard** provides the most comprehensive data, including cost analysis. The top agents are proprietary models from major AI labs.
*   **For Software Engineering:** **SWE-bench** is a key benchmark, but its leaderboard is not easily accessible. **Terminal-Bench** provides a very detailed and transparent leaderboard for terminal-based tasks. The field is a mix of proprietary and open-source solutions.
*   **For Specialized Tasks:** Benchmarks like **Aider Polyglot**, **GSO**, and **WebDev Arena** focus on specific skills like multilingual coding, code optimization, and web development. However, their leaderboards are not always available.

### Ranking

Providing a single ranking is challenging due to the different focus of each benchmark. However, based on the available data, we can identify top performers in different categories.

**Top General-Purpose Agents (from Galileo and Terminal-Bench):**

1.  **gpt-4.1-2025-04-14 (OpenAI):** Top performer on the Galileo leaderboard.
2.  **Claude series (Anthropic):** Strong performance on both Galileo and Terminal-Bench leaderboards.
3.  **Warp:** Top performer on Terminal-Bench, using multiple models.

**Top Software Engineering Agents (from SWE-bench):**

1.  **mini-SWE-agent:** Top performer on the "Verified" benchmark.
2.  **Refact.ai Agent:** Strong performer on the "Verified" benchmark.
3.  **SWE-agent:** State-of-the-art on the "Full" benchmark.

**Top Open-Source Frameworks:**

*   **OpenHands:** Mentioned in the context of the GSO benchmark.
*   **LangChain and AutoGen:** Widely used for building and comparing AI agents.

## Conclusion

The evaluation of AI agents is a complex and rapidly evolving field. This comparison matrix provides a snapshot of the current landscape, but it is essential to consult the original sources for the most up-to-date information. When choosing an AI agent or framework, it is crucial to consider the specific requirements of your use case, including the domain, the required performance level, the budget, and the usage limits.
