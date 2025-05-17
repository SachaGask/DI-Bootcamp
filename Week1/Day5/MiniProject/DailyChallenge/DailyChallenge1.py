
#Challenge 1

# fruits = input("Entrez une liste de fruits séparés par des virgules: ")
# liste = fruits.split(",")
# tri = sorted(liste) #Liste triée

# nombre = len(tri) #Nombre d'éléments

# final = "" #Liste finale
# session = 0
# for session in range(nombre): #Nombre de loop total = session / liste
#     indexage = tri[session] 
#     session +=1
#     if session == nombre:
#         final += indexage
#     else:
#         final += indexage + ","
#     continue
# print(final)

#Challenge 2

phrase = input("Entrez une phrase: ")
mots = phrase.split(" ")

record = 0
vainqueur = ""
for mot in mots:
    if len(mot) > record:
        record = len(mot)
        vainqueur = mot

print(f"{vainqueur} est le mot le plus long avec {record} lettres.")