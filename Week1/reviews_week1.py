
#Lists


# LISTS

# Create or Edit a list

# liste.append("element")  → Ajouter un seul élément à la fin de la liste
# liste.extend(["element1", "element2"])  → Ajouter plusieurs éléments (étendre la liste avec un autre itérable)
# liste.remove("element")  → Supprimer un élément spécifique par sa valeur
# liste.pop([1])     → Supprimer (et retourner) un élément par son index (par défaut le dernier)
# liste.sort()    → Trier la liste sur place (modifie la liste)
# sorted(liste)  → Retourne une nouvelle liste triée (sans modifier l’originale)
# elements.split()   → Diviser une chaîne de caractères en liste (par défaut sur les espaces)

# TUPLES

# Store information that never change (countries, atoms, ids, african countries presidents...)

# adresses = ("Ben Yehuda", "Nahal Benyamin","Eyn HaOved")
# print(adresses.count("Ben Yehuda")) #Obtenir l'index de "Ben Yehuda"

#SETS

# Store unique informations (ids, credentials)

# fruits = {"Apple","Banana","Orange"}
# vegetables = {"Broccoli", "Carrot", "Onion", "Banana"}
# common = fruits.intersection(vegetables) #Obtenir les mots en commun ("Banana")
# print(common)

#Dictionaries

# Easy to pipeline with JSON or JS

# d = {"nom": "Sacha", "age": 24}

# d.get("nom")               → Retourne la valeur associée à "nom", ou None si la clé n'existe pas
# d.keys()                   → Retourne toutes les clés du dictionnaire
# d.values()                 → Retourne toutes les valeurs
# d.items()                  → Retourne les paires (clé, valeur)
# d.update({"ville": "Paris"})  → Ajoute ou met à jour une ou plusieurs paires clé-valeur
# d.pop("age")               → Supprime une clé et retourne sa valeur
# d.popitem()                → Supprime et retourne le dernier élément ajouté (clé, valeur)
# d.clear()                  → Vide complètement le dictionnaire
# d.copy()                   → Retourne une **copie** du dictionnaire
# "nom" in d                 → Vérifie si une clé existe
# len(d)                     → Nombre d’éléments dans le dictionnaire

