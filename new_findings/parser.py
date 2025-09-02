import json
import re

with open('website.html', 'r') as f:
    html_content = f.read()

# Find the __NEXT_DATA__ script tag
match = re.search(r'<script id="__NEXT_DATA__" type="application/json">(.*?)</script>', html_content)

if match:
    json_data = json.loads(match.group(1))
    agents_by_category = json_data.get('props', {}).get('pageProps', {}).get('agentsByCategoryProp', {})

    if agents_by_category:
        # Print the results as JSON
        print(json.dumps(agents_by_category, indent=2))
    else:
        print("Could not find agentsByCategoryProp in the JSON data.")
else:
    print("Could not find the __NEXT_DATA__ script tag.")
