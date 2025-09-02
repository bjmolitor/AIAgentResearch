import os

agents_dir = 'agents/'
existing_agents = [d for d in os.listdir(agents_dir) if os.path.isdir(os.path.join(agents_dir, d))]
for agent in existing_agents:
    print(agent)
