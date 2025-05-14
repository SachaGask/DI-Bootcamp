
#Ex1

# birthdays = {
#     "Alice": "2000/12/12",
#     "Theo": "2001/10/01",
#     "Matt": "2002/08/29",
#     "Lea": "2003/03/04", 
#     "Louis": "2004/01/14",
#     }

# print("Bienvenue !")
# newname = input("Ajoutez un nom: ")
# newbirthday = input("Ajoutez un anniversaire: ")
# birthdays[newname] = newbirthday

# print("Choisissez un nom parmi la liste: ")

# for nom, birthday in birthdays.items():
#     print(nom)

# user = input("Votre choix:")
# if user == nom:
#     print(f" {user} est né le {birthday}.")
# else:
#     print(f"Désolé, nous n'avons pas les informations d'anniversaire pour {user}.")


# items = {
#     "banana": 4,
#     "apple": 2,
#     "orange": 1.5,
#     "pear": 3
# }

# for fruit, price in items.items():
#     print(f"Les articles {fruit} sont au prix de {price} €.")


items = {
    "banana": {"price": 4 , "stock":10},
    "apple": {"price": 2, "stock":5},
    "orange": {"price": 1.5 , "stock":24},
    "pear": {"price": 3 , "stock":1}
}

total = int()
for fruit, inventory in items.items():
    totalprice = items[fruit]["price"] * items[fruit]["stock"]
    total += totalprice
print(total)