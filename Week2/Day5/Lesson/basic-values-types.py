# BASIC VALUE TYPES

#STRINGS: chars that represent text in Python
"Hello Python"

#STRINGS METHODS
#print ("hello python".upper()) --> Uppercase the first char
#print ("hello python".lower()) --> lowercase all the chars
#print ("hello python".capitalize()) --> CAPITALIZE all the chars
#print("Goodnight Moon".replace("Moon","Sun")) --> Replace a specific word in the string

#Availability to index (positions)
#greetings = "Hello Python" # --> Declare the greetins variable
#print(greetings[6:12]) #--> Call the positions 6 to 12 which is the word 'Python'
#print(greetings[2])


#Exercise Basic Values
#description = "strings are..." #Our variable
#print(description.upper()) #Uppercase all the value of the var
#print(description.replace("are","is")) #Replace 'are' by 'is'
#print(description[0:7]) #Print 'strings'

#NUMBERS: INTEGER, FLOAT, COMPLEX
a = 5 #int
b = 2.7 #float
c = 5 + 3

#print(a + b)

#print(10/2) #
#print(11//2)
#print(11%2)
#print(round(10/3, 2)) # Arrondis la valeur selon le nombre après la virgule (donc 3,33)

#my_age= 24

#print("My age is " + str(my_age) + "years old") #str() to convert an int to a string

#prix = "10"
##result = int(prix) + 10 # Convertir le prix en char en prix en int
#print("The price is " + str(result) + " euros.")

#first_name = input("What's your name ? ")
#print("Welcome " + first_name + "!")

#user_age = int(input("How old are you ?"))
#future_age = str(user_age + 50)
#print("Your future age will be " + str(future_age) + " years old.")

#BOOLEANS: True/False

#COMPARISON

bank_balance = '33000'
phone_number = 532287514

#print(type(bank_balance))
#print(type(phone_number))

int_balance = int(bank_balance)
added_cash = 300
final_balance = str(int_balance + added_cash)
#print("Your balance is now " + final_balance + " shekel.")

BANK_NAME = "DIBank"
first_name = "Sacha"
print(f"Hey {first_name}, welcome to {BANK_NAME}! Your balance is now {final_balance} shekel.")

bank_balance = 30000
bank_balance += 200
print(bank_balance)
