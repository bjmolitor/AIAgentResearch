# BabyAGI

## Overview

BabyAGI is an open-source framework for building self-improving autonomous agents. The original 2023 version demonstrated a simple loop that creates, prioritizes, and executes tasks using OpenAI models and a vector database. The 2024 revision introduces a function-centric architecture that stores, manages, and executes functions with logging and a web dashboard.

## Key Information

- **Developer:** Yohei Nakajima
- **Website:** [https://github.com/yoheinakajima/babyagi](https://github.com/yoheinakajima/babyagi)
- **Pricing:** Open-source (MIT license)

## Key Features

- **Autonomous task generation and prioritization:** Generates new tasks based on previous results and objectives.
- **Function registry with dependency tracking:** Organizes functions in a database and maps their relationships.
- **Vector database memory:** Stores context in vector stores like Chroma or Weaviate.
- **Dashboard for management:** Provides a web dashboard for registering functions, managing keys, and viewing logs.
- **Open-source extensibility:** Built for experimentation and extension by developers.

## Supported Models

- OpenAI models
- Llama family

## Benchmarks

- **SWE-bench score:** Not available
- **Task Success Rate:** Not available
- **Resource Usage:** Not available

## Qualitative Assessment

- **Ease of Use:** Requires Python environment and API keys, but quickstart examples help users launch a dashboard quickly.
- **Documentation Quality:** Detailed README covers installation, basic usage, and function metadata.
- **Onboarding Experience:** Simple script with clear setup instructions, though not aimed at non-technical users.
