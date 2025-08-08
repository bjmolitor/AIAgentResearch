# Galileo AI Agent Leaderboard

This leaderboard evaluates the performance of various AI models on a range of tasks across different industries. The evaluation criteria include accuracy, task success quality, cost, and session duration.

**Link to leaderboard:** [https://huggingface.co/spaces/galileo-ai/agent-leaderboard](https://huggingface.co/spaces/galileo-ai/agent-leaderboard)

## Leaderboard Summary

| Model | Vendor | Avg AC | Avg TSQ | Avg Total Cost | Model Type |
|---|---|---|---|---|---|
| gpt-4.1-2025-04-14 | OpenAI | 0.62 | 0.8 | 0.0684 | Proprietary |
| gpt-4.1-mini-2025-04-14 | OpenAI | 0.56 | 0.79 | 0.0141 | Proprietary |
| claude-sonnet-4-20250514 | Anthropic | 0.55 | 0.92 | 0.1537 | Proprietary |
| kimi-k2-instruct | Moonshot AI | 0.53 | 0.9 | 0.0386 | Open source |
| qwen2.5-72b-instruct | Alibaba | 0.51 | 0.8 | 0.0361 | Open source |
| gemini-2.5-pro | Google | 0.43 | 0.86 | 0.1447 | Proprietary |
| grok-4-0709 | xAI | 0.42 | 0.88 | 0.2387 | Proprietary |
| deepseek-v3 | Deepseek | 0.4 | 0.8 | 0.0141 | Open source |
| gemini-2.5-flash | Google | 0.38 | 0.94 | 0.0271 | Proprietary |
| gpt-4.1-nano-2025-04-14 | OpenAI | 0.38 | 0.63 | 0.0038 | Proprietary |
| qwen3-235b-a22b | Alibaba | 0.37 | 0.86 | 0.0106 | Open source |
| magistral-medium-2506 | Mistral | 0.32 | 0.59 | 0.1182 | Proprietary |
| nova-pro-v1 | Amazon | 0.29 | 0.65 | 0.0359 | Proprietary |
| mistral-small-2506 | Mistral | 0.26 | 0.71 | 0.0053 | Open source |
| caller | Arcee | 0.16 | 0.65 | 0.0297 | Open source |
| nova-lite-v1 | Amazon | 0.16 | 0.55 | 0.0031 | Proprietary |
| magistral-small-2506 | Mistral | 0.16 | 0.53 | 0.0301 | Open source |
| mistral-medium-2505 | Mistral | 0.16 | 0.52 | 0.0293 | Proprietary |

## Overview

An evaluation framework for AI agents across real-world business scenarios. The project offers two versions: v1 for tool-calling performance and v2 with synthetic dataset generation and a simulation engine for evaluating task completion and tool use.

## Version 2 Features

- Dataset generation combining tools, personas, and scenarios across domains.
- Agent evaluation that simulates conversations to assess performance.
- Results analysis that aggregates metrics such as action completion and tool selection quality.

## Environment Setup

Version 2 targets Python 3.12 and requires API keys for providers such as OpenAI and Anthropic. Install dependencies inside the `v2` directory with:

```bash
pip install -r requirements.txt
```
