# Claude Code

## Overview
Claude Code is an agentic coding tool that lives in your terminal, understands your codebase, and helps you code faster by executing routine tasks, explaining complex code, and handling git workflows—all through natural language commands.

## Key Information
- **Developer:** Anthropic
- **Website:** [https://docs.anthropic.com/en/docs/claude-code/overview](https://docs.anthropic.com/en/docs/claude-code/overview)
- **Release Date:** February 22, 2025
- **GitHub Stars:** ~29.8k (Aug 2025)
- **Pricing:** Based on API token consumption; approximately $6 per developer per day using Sonnet 4.
- **Requirements:** Node.js 18+

## Key Features
- Build features from natural language descriptions.
- Debug and fix issues from error messages.
- Navigate and understand codebases.
- Automate tasks like fixing lint issues, writing tests, and release notes.
- Works in the terminal or IDE.
- Handles git operations like editing files, running commands, and creating commits.
- Scriptable and composable with Unix philosophy.
- Built-in `/bug` command for reporting issues.
- Feedback is stored for 30 days and not used for model training.
- Enterprise-ready with self-hosting options on AWS or GCP.

## Supported Models
- Claude Opus 4.1
- Claude Opus 4
- Claude Sonnet 4
- Claude Sonnet 3.7
- Claude Sonnet 3.5
- Claude Haiku 3.5
- Claude Haiku 3

## Benchmarks
- **SWE-bench Verified:** 49% (Claude 3.5 Sonnet) – [Anthropic research](https://www.anthropic.com/research/swe-bench-sonnet)
- **SWE-bench Verified:** 22% (Claude 3 Opus) – [Anthropic research](https://www.anthropic.com/research/swe-bench-sonnet)
- **Terminal-Bench Accuracy:** 43.2% ± 1.3 – [Terminal-Bench Leaderboard](https://www.tbench.ai/leaderboard)
- **Task Success Rate:** 0.432 (from Terminal-Bench accuracy)
- **Resource Usage:** Not publicly documented.

## Installation
1. `npm install -g @anthropic-ai/claude-code`
2. Navigate to your project directory and run `claude`.

## Qualitative Assessment
- **Ease of Use:** High (3) – effective for developers comfortable with the command line.
- **Documentation Quality:** High (3) – comprehensive official docs.
- **Onboarding Experience:** High (3) – "Get started in 30 seconds" guide provided.

## Missing Data
No standardized resource usage metrics beyond benchmark scores are published for Claude Code as of May 2025.
