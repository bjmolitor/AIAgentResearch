# Terminus

## Overview
Terminus is a research-preview AI agent built for evaluating language models directly in a terminal environment.

## Key Information
- **Developers:** Mike Merrill and Alex Shaw (Stanford University)
- **Website:** [https://www.tbench.ai/terminus](https://www.tbench.ai/terminus)
- **Pricing:** Research project; likely free to use.

## Key Features
- Operates autonomously with a single interactive tmux session.
- Model-agnostic through LiteLLM, supporting any API or local model.
- Connects to a dockerized execution environment over a remote tmux session.

## Supported Models
- Model-agnostic; works with various models via LiteLLM.

## Benchmarks
- **Terminal-Bench Accuracy:** 39.9% ± 1.0 – [Terminal-Bench Leaderboard](https://www.tbench.ai/leaderboard)
- **Task Success Rate:** 0.399 (from Terminal-Bench accuracy)
- **Resource Usage:** Not publicly documented; depends on the remote environment and model.
- **SWE-bench score:** Not published as of May 2025.

## Qualitative Assessment
- **Ease of Use:** Low – requires remote setup and tmux familiarity.
- **Documentation Quality:** Limited – minimal public documentation beyond research notes.
- **Onboarding Experience:** Low – geared toward researchers comfortable with terminals and docker.

## Missing Data
No public SWE-bench results or resource usage statistics are available for Terminus as of May 2025.
