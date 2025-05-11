#CONDITIONALS : IF STATEMENTS

#secret_number = str(55)
#user_number = input("Guess a number ! ")

#if user_number == secret_number:
#    print("Good job !")

#elif user_number == str(7):
 #   print("Good number, but no...")

#else:
#    print("Sorry, not the right number !")

number = int(input("Choose a number between 1 and 1000: "))

if number % 5 == 0 + number % 3 == 0:
    print("FizzBuzz")

elif number % 3 == 0:
    print("Fizz")

elif number %5 == 0:
    print("Buzz")

else:
    print("Not valid.")