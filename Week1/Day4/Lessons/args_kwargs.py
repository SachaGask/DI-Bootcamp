
#*Args and **Kwargs

# def print_names(*args): #Ajouter des arguments à l'infini
#     for name in args:
#         print(f"Hello {name}.")
#     if not args:
#         print(f"Please add a name.")

# print_names("Sacha","Lisya","Egoz","Raphael") #Arguments infinis grâce à *args

# def user_info(**kwargs): #Ajouter des keys + values à l'infini
#     for info in kwargs.items(): # items = tte la liste, keys = tte les keys, items = tt les items
#         print(info)

# user_info(name = "Sacha", age = 25, city = "Paris") #Keys + Values à l'infini grâce à kwargs

#Create a function called tasks_manager that accepts any tasks and prints
# "Today I need to do {task}."


# def tasks_manager(*tasks):
#     if tasks:
#         for task in tasks:
#             print(f"Today I need to {task}.")
#             liste = ", " .join(tasks)
#             print(f"Tomorrow I will need to {liste}.")
#     else:
#         print("Please add a task.")


# tasks_manager("clean the desk","do homeworks","charge my phone")


def party_planner (*foods, **details):
    if foods:
        print(f"\nTo buy: ")
        print(f",".join(foods))

    else:
        print("There is no food.")
    
    if details:
        print("\nParty details:")
        for champs, valeur in details.items():
            print(f"{champs} est à {valeur}")
    else:
        print("There is no party details.")


party_planner("Chips","Cola","Candy", Address = "Tel Aviv", Hour = 19, Price = "75₪")

