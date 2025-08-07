# Jules

## Overview

Jules is an experimental, asynchronous coding agent developed by Google. It is designed to assist developers by handling various coding tasks, allowing them to focus on more critical aspects of their projects. Jules integrates with GitHub and works by cloning repositories into a secure cloud environment to perform tasks.

## Key Features

- **Asynchronous Task Handling:** Jules works in the background, allowing developers to continue their work without interruption.
- **GitHub Integration:** Tasks can be assigned to Jules by adding a "jules" label to a GitHub issue. It also creates pull requests with the completed changes.
- **Interactive Planning:** Before making any changes, Jules creates a detailed plan for the user to review and approve.
- **Code Modifications:** Jules provides a diff of the proposed changes, giving the user full control over the final code.
- **Customizable Environment:** Users can provide setup scripts to configure the environment in which Jules operates.
- **AI-Powered:** Jules is powered by Google's Gemini 2.5 Pro model to understand and execute tasks.
- **AGENTS.md Awareness:** Jules can read and interpret `AGENTS.md` files in a repository to better understand the project's structure and conventions.
- **Notifications:** Browser notifications keep the user updated on the status of their tasks.

## Supported Models

- Gemini 2.5 Pro

## Benchmarks

- **SWE-bench score:** 52.2% ([Source](https://aiagentindex.mit.edu/jules/))
- **Task Success Rate:** Not available
- **Resource Usage:** Not available

## Qualitative Assessment

- **Ease of Use:** High, with a simple, prompt-based interface and interactive planning.
- **Documentation Quality:** High, with a clear and comprehensive 'Getting started' guide.
- **Onboarding Experience:** Straightforward, with a step-by-step guide for connecting to GitHub and starting a task.

## Pricing

Jules offers a tiered pricing model:

- **Jules:** A free tier with limits on daily and concurrent tasks.
- **Jules in Pro:** A paid tier for professional developers with higher task limits.
- **Jules in Ultra:** A premium tier for large-scale development with the highest task limits and priority access to new models.

## Getting Started

To start using Jules, you need to:

1.  Sign in to [jules.google.com](https://jules.google.com) with a Google account.
2.  Connect your GitHub account and select the repositories you want Jules to access.
3.  Assign a task to Jules by creating an issue with a "jules" label or by using the web interface.

For more detailed information, you can refer to the official [Jules documentation](https://jules.google/docs).
