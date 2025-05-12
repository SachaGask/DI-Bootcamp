
#Ex1

#my_fav_numberset = [0, 3, 5, 10]
#my_fav_numberset.extend([13, 17])
#my_fav_numberset.pop()
#print(my_fav_numberset)

#friend_fav_numberset = [20, 23, 26, 30]
#our_fav_numbers = my_fav_numberset + friend_fav_numberset
#print(our_fav_numbers)

#Ex2

#pairs = (2, 4, 6, 8)
#tolist = list(pairs)
#tolist.append(10)
#pairs = tuple(tolist)
#print(pairs)

#Ex3

#basket = ["Banana", "Apples", "Oranges", "Blueberries"]
#basket.remove("Banana")
#basket.pop()
#basket.append("Kiwi")
#basket.insert(0, "Apples")
#print(basket.count("Apples"))
#basket.clear()
#print(basket)

#Ex4

#A float is a non-integer number (with comas)

#liste = []
#i = 1.0
#while i < 5:
#    liste.append(i + 0.5)
#    i += 0.5
#print(liste)
    
#Ex5

#i = 1
#for i in range(1,20):
#    print(i)

#pairs = list(range(0, 21, 2))
#print(pairs)

#Ex6

#user_name = input("What's your name ? ")
#while user_name != "Sacha":
#      user_name = input("What's your name ? ")
#else:
#    print("Yes")

#Write a while loop that keeps asking the user to enter their name.
#Stop the loop if the user’s input is your name.

#Ex7

#fav_fruit = input("What's your favorite fruits ? ")
#fav_fruit = fav_fruit.split()
#random_fruit = input("Now choose a random fruit: ")
#if random_fruit in fav_fruit:
#    print("You chose one of your favorite fruits! Enjoy!")
#else:
#    print("You chose a new fruit. I hope you enjoy it!")

#Ex8

#toppings = list()
#topping= ""
#while topping != "Order":
#    topping = input("Add a Topping or Order: ")
#    toppings.append(topping)
#    if topping == "Order":
#        print("Thanks for your order !")
#    if topping != "Order":
#        print(f"{topping} added to your pizza.")


#print(f"Toppings: {toppings}. To Pay: {len(toppings) * 2.5 + 10} $")

#Ex9

#ages = input("How old are the persons of your family: ").split()
#total = 0

#for age in ages:
#    age = int(age)
#    if age < 3:
#        total += 0
#    elif 3 <= age <= 12:
#        total += 10
#    else:
#        total += 15

#print(f"Le coût total des billets est de {total} $.")

#Ex10

sandwich_orders = ["Tuna", "Pastrami", "Avocado", "Pastrami", "Egg", "Chicken", "Pastrami"]

while "Pastrami" in sandwich_orders:
    sandwich_orders.remove("Pastrami")
print("Pastrami removed from the list")

finished_sandwiches = []
for sandwich in sandwich_orders:
    print(f"I made your {sandwich} sandwich.")