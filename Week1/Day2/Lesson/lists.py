
#LISTS

#Syntax

#some_list = list("item 1") #Convertir une string en liste
#other_list = ["item 1"] #Créer une liste de 0
#print(len(some_list)) #Afficher la longueur de la liste
#print(some_list[1]) #Afficher l'index du caractère d'une liste
#some_list.append("A") #Ajouter un caractère à la fin de la liste
#some_list.extend(["B","C","D"]) #Ajouter plusieurs carcatères à la fin de la liste
#range_list = list(range(1,7,2)) #Créer des actions dans la liste dans l'ordre (start,stop,step)
#print(range_list[2:6]) #Récupère l'index des chars de la liste
#copied_list = range_list[:] # Copier une liste à l'identique

#Methods - A insérer comme some_list.method()

#insert(where, what) #Insérer 
#remove(what) # Supprime le nom de l'élément
#del some_list[3] #Supprime l'élément du numéro de l'index
#pop() #Supprime et/ou stocke le dernier élément
#sort() #Trie dans l'ordre alphébatique
#index(what) #Index du nom de l'élément

list1 = [5, 10, 15, 20, 25, 50, 20]

#found = list1.index(20)
#replace = list1.insert(found,200)
#print(replace)

if 20 in list1:
    found = list1.index(20)
    list1.insert(found,200)
    list1.remove(20)
    print(list1)

else:
    print("Element not found.")