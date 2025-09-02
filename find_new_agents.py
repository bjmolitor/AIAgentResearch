import json

with open('agents.json', 'r') as f:
    scraped_agents_data = json.load(f)

with open('existing_agents.txt', 'r') as f:
    existing_agents = [line.strip() for line in f.readlines()]

new_agents = []
for category, agents in scraped_agents_data.items():
    for agent in agents:
        agent_name = agent.get('title', '').replace(' ', '_')
        if agent_name not in existing_agents:
            new_agents.append(agent)

with open('new_agents.json', 'w') as f:
    json.dump(new_agents, f, indent=2)

for agent in new_agents:
    print(agent.get('title'))
