#1

# word = input("Enter a word: ")

# dict = {}
# for index, letter in enumerate(word): #Pour la position de chaque letter of "word"
#         if letter in dict: #Si la lettre est deja repertoriée
#             dict[letter].append(index) #On la rajoute avec son index
#         else: #Sinon
#             dict.update({letter: [index]}) #Ajouter "letter : index" au dictionnaire
        
# print(dict)
    
#2

items_purchase = {"Apple": "$4",
                  "Honey": "$3",
                  "Fan": "$14",
                  "Bananas": "$4",
                  "Pan": "$100",
                  "Spoon": "$2"
                  }
wallet = "$100"
basket = []


wallet = wallet.replace("$", "").replace(",", "")
wallet = int(wallet)

for item_name, price in items_purchase.items():
    price = price.replace("$", "").replace(",", "")
    price = int(price)

    if price < wallet:
        basket.append(item_name)
    else:
        continue

if basket:
    basket = sorted(basket)
    print(basket)
else:
    print("Nothing.")

