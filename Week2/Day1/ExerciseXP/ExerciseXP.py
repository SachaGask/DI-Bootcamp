
#Ex1

# class Cat:
#     def __init__(self, nom, age):
#         self.nom = nom
#         self.age = age

# Chat1 = Cat("Chat1", 2)
# Chat2 = Cat("Chat2", 8)
# Chat3 = Cat("Chat3", 3)

# chats = [Chat1, Chat2, Chat3]

# plus_vieux = 0
# vieux_chat = None
# for chat in chats:
#     if chat.age > plus_vieux:
#         plus_vieux = chat.age
#         vieux_chat = chat
#         gagnant = chat.nom

# print(f"Le chat le plus age est {gagnant} et il a {plus_vieux} ans.")

#Ex2

# class Dog:
#     def __init__(self, name, action, height):
#         self.name = name
#         self.action = action
#         self.height = height

#     def bark(self):
#         print(f"{self.name} fait {self.action} !")

#     def jump(self):
#         print(f"{self.name} saute {self.height} cm !")

# David = Dog("David","ouaf", 25)
# Manu = Dog("Manu", "GRRRR waf", 153)
# Sarah = Dog("Sarah", "GRRRR waf", 53)


# chiens = [David, Manu, Sarah]

# for chien in chiens:
#     chien.bark()
#     chien.jump()

# compare = 0
# plusfort = ""
# for chien in chiens:
#     if chien.height > compare:
#         compare = chien.height
#         plusfort = chien.name
# print(f"{plusfort} saute le plus haut !")

#Ex3

# class Song:
#     def __init__(self, lyrics):
#         self.lyrics = lyrics

#     def sing_me_a_song(self):
#         for line in self.lyrics:
#             print(line)

# stairway = Song(["There’s a lady who's sure", "all that glitters is gold", "and she’s buying a stairway to heaven"])
# stairway.sing_me_a_song()

#Ex4

class Zoo:
    def __init__(self, zoo_name):
        self.zoo_name = zoo_name
        self.animals = []
        self.sorted_animals = {}  # Pour stocker les groupes d'animaux triés

    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)

    def get_animals(self):
        pass

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)

    def sort_animals(self):
        sorted_dict = {}
        for animal in sorted(self.animals):  # Trie d'abord la liste
            first_letter = animal[0].upper()  # On normalise la lettre
            if first_letter in sorted_dict:
                sorted_dict[first_letter].append(animal)
            else:
                sorted_dict[first_letter] = [animal]
        self.sorted_animals = sorted_dict  # On sauvegarde le dictionnaire trié

    def get_groups(self):
        for letter, group in self.sorted_animals.items():
            print(f"{letter}: {group}")

ramat_gan_safari = Zoo("Ramat Gan Safari")

ramat_gan_safari.add_animal("Giraffe")
ramat_gan_safari.add_animal("Bear")
ramat_gan_safari.add_animal("Baboon")
ramat_gan_safari.add_animal("Cougar")
ramat_gan_safari.add_animal("Cat")
ramat_gan_safari.add_animal("Zebra")
ramat_gan_safari.add_animal("Lion")

ramat_gan_safari.get_animals()

ramat_gan_safari.sell_animal("Bear")
ramat_gan_safari.get_animals()
ramat_gan_safari.sort_animals()
ramat_gan_safari.get_groups()



# Cette méthode ajoute un nouvel animal à la animalsliste.
# N'ajoutez pas l'animal s'il est déjà dans la liste.
# 4. Ajoutez une méthode get_animals():

# Cette méthode imprime tous les animaux actuellement présents dans le zoo.
# 5. Ajoutez une méthode sell_animal(animal_sold):

# Cette méthode vérifie si un animal spécifié existe dans la liste des animaux et, si tel est le cas, le supprime.
# 6. Ajoutez une méthode sort_animals():

# Cette méthode trie les animaux par ordre alphabétique.
# Il les regroupe également par la première lettre de leur nom.
# Le résultat devrait être un dictionnaire où :
# Chaque touche est une lettre.
# Chaque valeur est une liste d’animaux commençant par cette lettre.
# Exemple de sortie :

# {
#    'B': ['Baboon', 'Bear'],
#    'C': ['Cat', 'Cougar'],
#    'G': ['Giraffe'],
#    'L': ['Lion'],
#    'Z': ['Zebra']
# }