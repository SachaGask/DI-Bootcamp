
#FUNCTIONS

def function():
    print("I am a function.")

#function()

# def aire(longueur,largeur):
#     rectangle = longueur * largeur
#     return rectangle

# resultat = aire(10, 5)
# print("L'aire du rectangle est", resultat ,".")


#Passing Argument to the Function
# def greetings(language = "English", name = "Bryan"):
#     if language == "French":
#             print(f"Bonjour {name}")
#     elif language == "English":
#             print(f"Hello {name}")
#     elif language == "Portuguese":
#             print(f"Ola {name}")

#     else:
#         print("Language not yes supported.")

# #Default: Order
# greetings("Portuguese", "Ilia")
# #Keyword Arguments
# greetings(name="Joel", language="English")

#Ex

# def country_info(name = "Naboo", capital="Theed"):
#         print (f"The capital of {name} is {capital}.")
    
# country_info("France", "Paris")

#Return

# def calculation(num1, num2):
#       result = num1 * num2
#       return result

# result = calculation(10,2)
# print(result)

# countries = ["Brazil", "Russia", "India", "China", "South Africa"]

# def country_info(countries):
#     for country in countries:
#          print(f"Hello {country}.")
#          if country == "India":
#               return country #Declarer India comme country

# print(country_info(countries)) #Imprimer la liste jusqu'à ce que le "country return" = India

#Scopes

#Global Scope : On all the file
#Local Scope: Indented Block (if, for...)

global_var = 100

def calculation(a,b):
     addition = a+b
     substraction = a-b
     return addition, substraction

aditional, substract = calculation(10,5)
print(aditional, substract)