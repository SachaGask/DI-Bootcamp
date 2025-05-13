
#Ex1

# keys = ['Ten', 'Twenty', 'Thirty']
# values = [10, 20, 30]

# print(dict(zip(keys, values)))

#Ex2

# famille = {"Tom": 30, "Lea": 36, "Matheo": 800}

# billet=int()
# for enfant,age in famille.items():
#     if age <= 3:
#         billet += 0
#     elif age <= 12:
#         billet += 10
#     else:
#         billet += 15
    
# print(f"Le prix est de {billet} €.")

#Ex 3

brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color":{
        "France": "blue",
        "Spain": "red",
        "US": ["pink", "green"]
    }
}

# brand["number_stores"] = 2
# print(brand["number_stores"])
# print(f"Zara customers are likely {brand["type_of_clothes"][1]}.")
# brand["country_creation"] = "Spain"
# print(brand)
# if "international_competitors" in brand:
#     brand["international_competitors"].append("Desigual")
#     print(brand["international_competitors"])
# del brand["creation_date"]
# print(brand)
# print(
#     brand["international_competitors"][-1]
# )
# print(
#     brand["major_color"]["US"]
# )
#print(len(brand))
# for key, value in brand.items():
#     print(key)

#Ex4
# users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]
# index = [0,1,2,3,4]

#1
# user_dict = dict(zip(users, index))
# print(user_dict)

#2
# dict = {
#         0: "Mickey",
#         1: "Minnie",
#         2: "Donald",
#         3: "Ariel",
#         4: "Pluto"
#     }
# print(dict)

#3
# alpha = sorted(users)
# user_dict = dict(zip(alpha, range(len(alpha))))
# print(user_dict)
