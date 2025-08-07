# CrewAI

## Overview

CrewAI is a cutting-edge framework for orchestrating role-playing, autonomous AI agents. By fostering collaborative intelligence, CrewAI enables agents to work together seamlessly to tackle complex tasks. It empowers developers to build sophisticated multi-agent interactions that can automate workflows, from simple processes to intricate business operations.

## Key Features

- **Role-Based Agents**: Define agents with specific roles, goals, and tools, allowing for specialized contributions to a task.
- **Autonomous Inter-Agent Delegation**: Agents can autonomously delegate tasks to one another, creating a dynamic and efficient workflow.
- **Flexible Task Management**: Customize tasks with specific tools and instructions, and assign them to the most suitable agents.
- **Extensible Tooling**: Easily add new tools to agents, expanding their capabilities to interact with external systems and data sources.
- **Process-Driven Workflows**: Choose between sequential and hierarchical processes to orchestrate agent collaboration, with more topologies to come.
- **LLM Agnostic**: CrewAI is designed to be compatible with a wide range of language models, giving you the flexibility to choose the best one for your needs.

## Getting Started

To get started with CrewAI, you can install the library using pip:

```bash
pip install crewai
```

Then, you can create your first crew by defining agents and tasks, and then kicking off the process:

```python
from crewai import Agent, Task, Crew, Process

# Define your agents
researcher = Agent(
  role='Senior Researcher',
  goal='Discover innovative solutions to problems',
  backstory='You are a senior researcher at a leading tech think tank.'
)

writer = Agent(
  role='Content Strategist',
  goal='Craft compelling content that engages and informs',
  backstory='You are a renowned content strategist, known for your insightful and engaging articles.'
)

# Define your tasks
research_task = Task(
  description='Research the latest trends in AI and machine learning',
  agent=researcher
)

write_task = Task(
  description='Write a blog post on the future of AI',
  agent=writer
)

# Create and kickoff your crew
crew = Crew(
  agents=[researcher, writer],
  tasks=[research-task, write-task],
  process=Process.sequential # or Process.hierarchical
)

result = crew.kickoff()
```

## Resources

- **Website**: [https://www.crewai.com/](https://www.crewai.com/)
- **Documentation**: [https://docs.crewai.com/](https://docs.crewai.com/)
- **GitHub**: [https://github.com/crewaiinc/crewai](https://github.com/crewaiinc/crewai)
