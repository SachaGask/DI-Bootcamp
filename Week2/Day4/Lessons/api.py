
import requests
import json

dir_path = "/Users/sacha/Desktop/DI-Bootcamp/Week2/Day4/Lessons"

response = requests.get("https://api.chucknorris.io/jokes/random")
#print(response.text)

data = json.loads(response.text)

with open(f"{dir_path}/jokes.json", "w", encoding="utf-8") as f:
    json.dump(data, f, indent=2, sort_keys=True)

print(data["value"])