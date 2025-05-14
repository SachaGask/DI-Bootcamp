import random

#Ex1

# def display_message():
#     print("J’apprends les fonctions en Python.")

# display_message()

#Ex2

# def favorite_book(title):
#     print(f"L’un de mes livres préférés est {title}.")

# favorite_book("Alice in Wonderland")

#Ex3

# def describe_city(city,country="Inconnu"):
#     print(f"{city} est dans {country}.")

# describe_city("Paris","France")
# describe_city("Reykjavik")

#Ex4



# def choix(chiffre):
#     hasard = random.randint(1,100)
#     if chiffre == hasard:
#         print(f"Gagné ! Vous avez choisi {chiffre} et la machine {hasard}.")
#     else:
#         print(f"Perdu ! Vous avez choisi {chiffre} et la machine {hasard}.")

# choix(55)

#Ex5

# def make_shirt(size = "large", text="I love Python"):
#     print(f"Vous avez choisi la taille {size} avec le message {text}.")


# make_shirt()
# make_shirt("medium")
# make_shirt("small","custom message")

#Ex6

# magician_names = ["Harry Houdini", "David Blaine", "Criss Angel"]

# def show_magicians(magician_names):
#     for magician_name in magician_names:
#         print(magician_name)

# def make_great(magician_names):
#     for magician in magician_names:
#         print(f"{magician} le Grand")

# make_great(magician_names)

#Ex7

# def get_random_temp():
#     random.randint(-10,40)
    
# def main(get_random_temp):
#     temp = get_random_temp
#     print(f"La température actuelle est de {temp} degrés Celsius.")
#     if temp < 0:
#         print("Brrr, il fait un froid de canard ! Portez des couches supplémentaires aujourd'hui.")  
#     elif temp < 16:
#         print("Il fait plutôt frais ! N'oubliez pas votre manteau.")
#     elif temp < 23:
#         print("Beau temps.")
#     elif temp < 32:
#         print("Un peu chaud, restez hydraté.")
#     elif temp < 40:
#         print("Il fait vraiment chaud ! Restez au frais.")

# temp = 20
# main(temp)

