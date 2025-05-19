
# class Vehicle:
    
#     class Car:
#         def __init__(self, wheels):
#             self.wheels = wheels
        
#         def roues(self):
#             print(f"This vehicle has {self.wheels} wheels.")


# my_car = Vehicle.Car("5")

# my_car.roues()

# class Parent:
#     def speak(self):
#         print(f"Parent is speaking.")

# class Child(Parent):
#     pass

# class Grandchild(Child):
#     pass

# obj1 = Child().speak()
# obj2 = Grandchild().speak()

# class Animal:
#     def __init__(self, name, family,legs):
#         self.name = name
#         self.family = family
#         self.legs = legs

# class Cat(Animal):
#     def get_crazy(self):
#         print(f"{self.name} is meowing with his {self.legs} legs.")


# class Alien:
#     def __init__(self, personal_name, planet):
#         self.personal_name = personal_name
#         self.planet = planet

#     def fly(self):
#         return f"{self.personal_name} is flying to {self.planet}"
    
# class AlienCat(Cat,Alien):
#     def __init__(self, name, family, legs, personal_name, planet):
#         Cat.__init__(self, name, family, legs)
#         Alien.__init__(self, personal_name, planet)


# class Cat(Animal):
#     def __init__:
#     def super(__init__):
#         pass



## EXERCISE ##

# Add 2 other attributes specifically to the Dog class: trained (Boolean), age (int)
# Use the super().__init__() function to do so
# Create an instance of Dog after that and analyze what changed


class Animal:
    def __init__(self, name, family, legs):
        self.name = name
        self.family = family
        self.legs = legs
        self.full_name = f'{name} {family}'

class Dog(Animal):
    def bark(self):
        print(f'A {self.name} is barking')
    
    def __init__(self, name, family, legs, trained, age):
        super().__init__(name, family, legs)
        self.trained = trained
        self.age = age

    def sleep(self):
        print(f"{self.name} has {self.legs} legs ans is {self.age} yo.")


dog_1 = Dog("Buddy", "Retriever", 4, trained=True, age=3)
dog_1.sleep()
print(dog_1.__dict__)
