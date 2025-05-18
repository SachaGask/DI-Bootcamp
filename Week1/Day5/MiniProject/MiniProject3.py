
#Ex1

# liste = ["Marie","Pierre","Manu"]
# liste.insert(2, "Julien")
# print(liste)

#Ex2

# chaine = "Je suis un homme."
# chaine.count(" ")
# print(f"Il y a {chaine.count(' ')} espaces dans la chaine.")

#Ex3

# maj = 0
# min = 0
# for lettres in chaine:
#     if lettres.isupper():
#         maj += 1
#     if lettres.islower():
#         min += 1
# print(f"Il y a {maj} majuscules et {min} minuscules.")

#Ex4

# somme = [1,3,10,25]
# total = 0
# for nombre in somme:
#     total += nombre

# print(f"Le total est de {total}.")

#Ex5

# listemax = [0,1,3,50,45,12]

# record = 0
# for nombre in listemax:
#     if nombre > record:
#         record = nombre

#Ex6

# nombre = 4
# facteur = 0

# for tour in range(nombre):
#     tour +=1
#     facteur += nombre * (nombre - tour)
# print(facteur)

#Ex7

# list_count = (['a','a','t','o'],'a')

# letter = "a"
# count = 0

# for letter in list_count:
#     count +=1
# print(f"Il y a {count} '{letter}'.")

#Ex9

is_mono = [1,2,0,4]

tri = sorted(is_mono)

if tri == is_mono or tri[::-1] == is_mono:
    print(True)
else:
    print(False)