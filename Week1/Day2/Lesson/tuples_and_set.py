
#Tuples: ne peut pas etre vide

my_tuple = ("TLV")
my_tuple = tuple(range(11)) #Générer une liste jusqu'à 11
print(my_tuple)

passwords = ("abc","cde","123")
print(passwords[1]) #Accéder par index

temp_list = list(passwords) #Convertir en liste
temp_list.extend(["A","B","C"])
my_tuple = tuple(temp_list)

#Sets

set = set()

countries = {"Israel","USA","Brazil"}
names = {"Shimon","Hanna","Israel"}

countries.intersection(names) #Trouver les éléments communs dans 2 sets
