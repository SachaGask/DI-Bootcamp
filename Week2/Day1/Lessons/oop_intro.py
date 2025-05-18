
#OOP: Object Oriented Programing

# What is an object ?

# class Dog: #1 - Définir avec init
#     def __init__(self, name, color,breed, action, age):
#         self.name = name
#         self.color = color
#         self.breed = breed
#         self.age = age
#         self.action = action



# #Instance/Object of class "Dog":
# shelter_dog = Dog("Rex","black", "shelter", "barking", 5)
# print(shelter_dog.__dict__)

# #Create two objects (instances) of the class Dog

# Max = Dog("Max","white", "family", "walk", 3)
# Bouny = Dog("Bouny","green", "shelter", "alone", "one")

# chiens = [Max, Bouny]

# def action(self, meters):
#     print(f"{self.name} is walking {meters} meters.")


# def birthday(self):
#     self.age += 1
#     print(Max.age)

# Leçon

class Personne: #Declaration de la classe
    def __init__(self, nom, age): #Definis le nom et l'age de la personne
        self.nom = nom #Créer une variable plus simple
        self.age = age #Créer une variable plus simple

    def birthday(self): #Definis le birthday de la personne
        self.age += 1 #Ajoute 1
        print(self.age)  # ou print(f"{self.nom} a maintenant {self.age} ans")
        return self

    def rename(self, nom):
        self.nom = nom
        return self

# Création de l’objet Maxime
Maxime = Personne("Maxime", 25)
Maxime.nom = "Emilien" #Nom à remplacer

# Appel de la méthode
Maxime.birthday()  # → 26
print(f"{Maxime.nom} a maintenant {Maxime.age} ans.")