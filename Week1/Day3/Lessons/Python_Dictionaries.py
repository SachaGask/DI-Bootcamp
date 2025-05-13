
# shopping_list = ["milk","eggs","bread"]
# shopping_list.append("butter")
# shopping_list.remove("eggs")
# shopping_list[0]

# students = {"name": "John","age":20,"major":"Computer Science"} #Ajout d'un dict

# #print(students["age"]) #Affichage de la Key "age"

# rick_dict = { #Declaration d'un dict
#     "name" : "Jean",
#     "family" : "Sanchez"
# }

# my_dog = { #Dict avec differentes types de keys
#     "name" : "Rufus",
#     "age" : 4,
#     "good_dog" : True
# }

#print(rick_dict["family"])
#print(rick_dict["name"])

# a_dict = {"color" : "blue", "fruit": "apple", "pet": "dog"}

#for key, value in a_dict.items():
#    print(key,"->", value)

#my_dog = {
#  'name': 'Rufus',
#  'age': 4,
#  'best_friend': {
#    'name': 'Felix',
#   'age': 4.5
#  },
#  'favorite_foods': ['steaks', 'sausages', 'shawarma']
#}

# rick_dict = { #Declaration d'un dict
#     "name" : "Jean",
#     "family" : "Sanchez"
# }

# rick_dict["family"] = "SANCHEZ_2" #Remplace la valeur actuelle de la clé
# rick_dict["age"] = "70" #Ajoute une clé et sa valeur
# rick_dict["hair_color"] = "Brown" #Ajoute une clé et sa valeur

#print(rick_dict)
#print(rick_dict["family"])
#print(rick_dict["age"])

#del rick_dict["hair_color"] # Supprimer un élément du dict

# shirts = [
#   {
#     'name': 'Awesome T-shirt 3000',
#     'size': 'S',
#     'price': 20
#   },
#   {
#     'name': 'Awesome T-shirt 3000',
#     'size': 'M',
#     'price': 25
#   },
#   {
#     'name': 'Awesome T-shirt 3000',
#     'size': 'L',
#     'price': 30
#   },
# ]

# # for shirt in shirts:
# #     print(shirt["size"])

# sample_dict = { 
#    "class":{ 
#       "student":{ 
#          "name":"Mike",
#          "marks":{ 
#             "physics":70,
#             "history":80
#          }
#       }
#    }
# }

# print(sample_dict["class"]["student"]["marks"]["history"]) #Comme si entre chaque il y avait /

# sample_dict = {
#   "name": "Kelly",
#   "age":25,
#   "salary": 8000,
#   "city": "New york"

# }
# keys_to_remove = ["name", "salary"]

# del sample_dict["name"], sample_dict["salary"]
# print(sample_dict)

#>> the title is Harry Potter
#the author is JK Rowling

# noms = {
#     "name": "Lisya",
#     "founder" : "Nese"
#         }

# for a, b in noms.items():
#     print("The " + a + " is " + b )

# while True:
#     champs = input("Entrez une phrase")
#     if champs == "quitter":
#         break
#     if champs == "Passif":
#         print("Ok...")
#         pass
    # else:
    #     print("Le champs contient "  + str(len(champs)) + " caractères.")
    #     continue

# family_age = {'Lea': 12, 'Mark': 25, 'George': 50}

# new_year = 1

# new_family_age = {name: age+new_year for (name, age) in family_age.items()}

# print(new_family_age)

famille = {"Sacha" : 24, "Lisya" : 23, "Laurence" : 49}
next_year = {nom: age+1 for (nom, age) in famille.items()}
print(next_year)