
#Ex1

student_grades = {
    "Alice": [88, 92, 100],
    "Bob": [75, 78, 80],
    "Charlie": [92, 90, 85],
    "Dana": [83, 88, 92],
    "Eli": [78, 80, 72]
}

#1

student_averages = {}
for eleve, notes in student_grades.items(): #Sépare bien eleves et notes pour chacun
    moyenne = int((sum(notes) / len(notes))) #Fait la moyenne pour chacun
    student_averages[eleve] = moyenne #Ajout au dict de chaque élève et sa moyenne
#1 print(student_averages) #Imprime

#2
grade=str()
for eleve, moyenne in student_averages.items():
    if moyenne >= 90:
        grade = "A"
        #print({eleve : grade})
    elif moyenne >= 80:
        grade = "B"
        #print({eleve : grade})
    elif moyenne >= 70:
        grade = "C"
        #print({eleve : grade})
    elif moyenne >= 60:
        grade = "D"
        #print({eleve : grade})
    else:
        grade = "F"
        #print(grade)

#3

#print(student_averages)
# moyenne_ge = 0
# for eleve, moyenne in student_averages.items():
#     moyenne_ge += moyenne
# print(moyenne_ge / len(student_grades))

#4

# bulletin = {}
# grade=str()
# for eleve, moyenne in student_averages.items():
#     if moyenne >= 90:
#         grade = "A"
#     elif moyenne >= 80:
#         grade = "B"
#     elif moyenne >= 70:
#         grade = "C"
#     elif moyenne >= 60:
#         grade = "D"
#     else:
#         grade = "F"

#     bulletin[eleve] = [moyenne, grade]
# print(bulletin)

#Ex2

sales_data = [
    {"customer_id": 1, "product": "Smartphone", "price": 600, "quantity": 1, "date": "2023-04-03"},
    {"customer_id": 2, "product": "Laptop", "price": 1200, "quantity": 1, "date": "2023-04-04"},
    {"customer_id": 1, "product": "Laptop", "price": 1000, "quantity": 1, "date": "2023-04-05"},
    {"customer_id": 2, "product": "Smartphone", "price": 500, "quantity": 2, "date": "2023-04-06"},
    {"customer_id": 3, "product": "Headphones", "price": 150, "quantity": 4, "date": "2023-04-07"},
    {"customer_id": 3, "product": "Smartphone", "price": 550, "quantity": 1, "date": "2023-04-08"},
    {"customer_id": 1, "product": "Headphones", "price": 100, "quantity": 2, "date": "2023-04-09"},
]

#1
# chiffre = int()
# for vente in sales_data:
#     chiffre = vente["price"] * vente["quantity"]
    #print("Chiffre par catégorie: " + str(chiffre) + "€")

#2

# depenses_par_client = {} #Declarer le dict
# for vente in sales_data: #Pour chaque element "vente" dans "sales_data"
#     client = vente["customer_id"] #Declarer client = chaque customer_id
#     montant = vente["price"] * vente["quantity"] #Declarer montant = prix * quantité
    
#     if client in depenses_par_client: #Si un client est dans depenses_par_clients
#         depenses_par_client[client] += montant #Ajouter le montant au client existant
#     else:
#         depenses_par_client[client] = montant #Sinon, ajouter le montant

# print(depenses_par_client) #Imprimer le dict


# for vente in sales_data:
#     vente["total_price"] = vente["price"] * vente["quantity"]
#     print(vente["total_price"])

# # Transactions de grande valeur :

# grandevaleur = list()
# for vente in sales_data:
#     if vente["total_price"] > 500:
#         grandevaleur.append(vente["total_price"])
# else:
#     []

# decroissants = sorted(grandevaleur, reverse=True)
# print(decroissants)

# Identification de la fidélité client :

achat_par_client = {}

for vente in sales_data:
    client_id = vente["customer_id"]
    if client_id in achat_par_client:
        achat_par_client[client_id] += 1
    else:
        achat_par_client[client_id] = 1

bonsclients = [client for client, nb in achat_par_client.items() if nb > 1]

print(bonsclients)