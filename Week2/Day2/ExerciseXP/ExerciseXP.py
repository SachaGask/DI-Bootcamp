import random

#Ex1

# class Pets():
#     def __init__(self, animals):
#         self.animals = animals

#     def walk(self):
#         for animal in self.animals:
#             print(animal.walk())

# class Cat:
#     is_lazy = True
    
#     def __init__(self, name, age):
#         self.name = name
#         self.age = age

#     def walk(self):
#         return f'{self.name} is just walking around'

# class Siamese(Cat):
#         pass

# class Bengal(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'

# class Chartreux(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'


# bengal_obj = Bengal("Banger", 3)
# chartreux_obj = Chartreux("Charlie", 5)
# siamese_obj = Siamese("Siemens", 1)

# all_cats = [bengal_obj, chartreux_obj, siamese_obj]

# sara_pets = Pets(all_cats)

# sara_pets.walk()

#Ex2

# class Dog():
#     def __init__(self, name, age, weight):
#         self.name = name
#         self.age = age
#         self.weight = weight

#     def bark(self):
#         print(f"{self.name} is barking")

#     def run_speed(self):
#         return int(self.weight / self.age * 10)

#     def fight(self, other_dog):
#         my_speed = self.run_speed()
#         opponent_speed = other_dog.run_speed()

#         if opponent_speed > my_speed:
#             print(f"{other_dog.name} won!")
#         else:
#             print(f"{self.name} won!")

# dog1 = Dog("Rex",9,5)
# dog2 = Dog("Kingous",11,2)
# dog3 = Dog("Rimass",4,10)

# dogs = [dog1,dog2,dog3]
# for dog in dogs:
#     for opponent in dogs:
#         if dog != opponent:
#             print(f"\n{dog.name} vs {opponent.name}")
#             dog.fight(opponent)

#Ex3

# class Dog():
#     def __init__(self, name, age, weight):
#         self.name = name
#         self.age = age
#         self.weight = weight

#     def bark(self):
#         print(f"{self.name} is barking.")

#     def run_speed(self):
#         return int(self.weight / self.age * 10)

#     def fight(self, other_dog):
#         my_speed = self.run_speed()
#         opponent_speed = other_dog.run_speed()

#         if opponent_speed > my_speed:
#             print(f"{other_dog.name} won!")
#         else:
#             print(f"{self.name} won!")
    
# class PetDog(Dog):
#     def __init__(self, name, age, weight):
#         super().__init__(name, age, weight)
#         self.trained = False

#     def train(self):
#         self.trained = True
#         return self.bark()

#     def play(*args):
#         liste = []
#         for chien in args:
#             liste.append(chien.name)
#         print(f"{", ".join(liste)} jouent tous ensemble.")

#     def do_a_trick(self):
#         if self.trained == True:
#             tricks = ["does a barrel roll", "stands on his back legs", "shakes your hand", "plays dead"]
#             hasard = random.choice(tricks)
#             print(f"You can ask {self.name} to {hasard} for example !")

# dog1 = PetDog("Rex",12,4)
# dog2 = PetDog("Maxus",3,10)
# dog3 = PetDog("Rimass",8,6)
# my_dog = PetDog("Fido", 2, 10)

# my_dog.train()
# my_dog.do_a_trick()

# PetDog.play(dog1, dog2, dog3, my_dog)
# tricks = ["does a barrel roll", "stands on his back legs", "shakes your hand", "plays dead"]

#Ex4

class Person:
    def __init__(self, first_name, age):
        self.first_name = first_name
        self.age = age
        self.last_name = ""

    def is_18(self):
        if self.age >= 18:
            return True
        else:
            return False

class FamilyPerson(Person):
    last_name = "Garcia"  # ← nom de famille fixe pour toute la classe
    members = []

    def __init__(self, first_name, age):
        super().__init__(first_name, age)
        FamilyPerson.members.append(self)

    def born(first_name, age):
        return FamilyPerson(first_name, age)
    
    def check_majority():
            for member in FamilyPerson.members:
                if member.age >= 18:
                    print(f"{member.first_name} est majeur(e).")
                else:
                    print(f"{member.first_name} est mineur(e).")

    def is_18(self):
        if self.age >= 18:
            print(f"You are over 18, your parents Jane and John accept that you will go out with your friends.")
        else:
            print(f"Sorry, you are not allowed to go out with your friends.")

    def family_presentation(self):
        print(f"Family name: {FamilyPerson.last_name}")
        print("Members:")
        for member in FamilyPerson.members:
            print(f"- {member.first_name}, {member.age} years old")
    
manuel = FamilyPerson.born("Manuel", 18)
laura = FamilyPerson.born("Laura", 35)
brigitte = FamilyPerson.born("brigitte", 41)

manuel.family_presentation()