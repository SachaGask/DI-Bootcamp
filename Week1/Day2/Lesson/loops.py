
#Loops - For and While loops

fruits = ["apple","banana","kiwi","pear"]

#for each_fruit in fruits:
#    print(f"I love {each_fruit} !")

#for i in range(1,10):
#    print(i)

#pairs = list(range(1, 11, 2)) #Prends tous les nums pairs entre 1 et 10
#print(min(pairs))
#print(max(pairs))
#print(sum(pairs))

# While loop

#num = 0
#while num <=10:
#   print(num)
#   num += 1

secret_num = 77
user_num = input("Tyy a number: ")

while user_num != secret_num:
    print("No.")
    user_num = int(input("Try again: "))
else:
    print("Yes!")