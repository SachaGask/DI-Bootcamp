
import json
import os

dir_path = "/Users/sacha/Desktop/DI-Bootcamp/Week2/Day4/Lessons"

#Converting a dict to json

my_family = {
    "parents": ["Beth","Jerry"],
    "children": ["Summer", "Morty"]
}

# with open(f"{dir_path}/family.json", "w", encoding="utf-8") as f:
#     json.dump(my_family, f) #Create a file

# json_my_family = json.dumps(my_family)
# print(type(json_my_family)) #Create a string 

#Convert a JSON into a dict
with open(f"{dir_path}/family.json", "r", encoding="utf-8") as f:
    json_my_family = json.load(f) #Convert from JSON to a dict
print(type(json_my_family))

parsed_family = json.loads(json_my_family)
print("Parsed from JSON String", parsed_family)

