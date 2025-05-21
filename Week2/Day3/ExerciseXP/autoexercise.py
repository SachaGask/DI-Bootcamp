
# def filtrer_grands(liste):
#     elements = []
#     for element in liste:
#         if element > 10:
#             elements.append(element)
#     return elements

# test = filtrer_grands([4, 12, 8, 15])
# print(test)

# import random
# import string

# def mot_aleatoire():
#     resultat = ""
#     for i in range(5):
#         resultat += random.choice(string.ascii_letters)
#     return resultat

# print(mot_aleatoire())

import datetime

# def jours_depuis(date_str):
#     naissance = datetime.datetime.strptime(date_str,"%Y-%m-%d").date()
#     temps = datetime.date.today() - naissance
#     return temps.days


# jours = jours_depuis("2001-01-25")
# print(f"Tu as vécu environ {jours} jours.")


# def age_en_minutes(date_str):
#     if not isinstance(date_str, str):
#         raise TypeError("Tu dois entrer une chaîne de caractères au format YYYY-MM-DD.")
    
#     try:
#         naissance = datetime.datetime.strptime(date_str,"%Y-%m-%d")
#     except ValueError:
#         raise ValueError("Format invalide. Utilise le format YYYY-MM-DD.")
    
#     maintenant = datetime.datetime.now()
#     diff = maintenant - naissance
#     minutes = diff.total_seconds() / 60
#     return int(minutes)
    

# Manu = age_en_minutes("2001-01-25")
# print(Manu)

# class Humain:
#     def __init__(self, nom, race, naissance):
#         self.nom = nom
#         self.race = race
#         self.naissance = int(naissance)


#     def __str__(self):
#         return f"{self.nom} est de race {self.race}."

#     @property
#     def age(self):
#         annee_actuelle = int(datetime.datetime.now().year)
#         return annee_actuelle - self.naissance

#     def langue(self, language):
#         print(f"{self.nom} parle {language} et est de race {self.race}.")

# Mahmoud = Humain("Mahmoudiya","arabe","2001")
# # Mahmoud.langue("wallah")

# print(Mahmoud.age)

# class Humain:
#     def __init__(self, nom, age):
#         self.nom = nom
#         self.age = age

# class Etudiant(Humain):
#     def __init__(self, nom, age, universite):
#         self.universite = universite
#         super().__init__(nom, age)
#         print(f"Je m'appelle {nom}, j'ai {age} ans et j'étudie à {universite}.")

# Lisya = Etudiant("Lisya",23,"Reichmann")

class Produit:
    def __init__(self, nom, prix):
        self.nom = nom
        self.prix = prix

    def __str__(self):
        return f"Produit : {self.nom}, Prix : {self.prix}€"
    
    def __add__(self, other):
        if isinstance(other, Produit):
            return self.prix + other.prix
        
class Note(Produit):
    def __init__(self, valeur):
        if not 1 <= valeur <= 20:
            raise ValueError("La note doit être entre 1 et 20.")
        self.valeur = valeur

    def __eq__(self, other):
        return isinstance(other, Note) and self.valeur == other.valeur
    
    def __str__(self):
        return f"Note : {self.valeur}/20"

class Panier(Produit):
    def __init__(self):
        self.produits = []

    def ajouter_produit(self, produit):
        if not isinstance(produit, Produit):
            raise TypeError("Seuls les objets Produit peuvent être ajoutés.")
        self.produits.append(produit)

    def __str__(self):
        lignes = [f"{p.nom} : {p.prix}€" for p in self.produits]
        total = sum(p.prix for p in self.produits)
        lignes.append(f"Total : {total}€")
        return "\n".join(lignes)

    def __len__(self):
        return len(self.produits)
    

p1 = Produit("Pain", 2)
p2 = Produit("Fromage", 5)

print(p1 + p2)  # ➜ 7

note1 = Note(18)
note2 = Note(18)
print(note1 == note2)  # ➜ True

panier = Panier()
panier.ajouter_produit(p1)
panier.ajouter_produit(p2)
print(panier)
print(f"Il y a {len(panier)} produits dans le panier.")