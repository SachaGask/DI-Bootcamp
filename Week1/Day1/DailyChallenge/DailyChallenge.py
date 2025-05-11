import random

input = input("Enter a string:")

if len(input) < 10:
    print("String not long enough.")
elif len(input) > 10:
    print("String too long.")
else:
    print("Perfect string")
    print("First and Last chars are " + input[0] + " & " + input[-1])
    for i in range(1, len(input) + 1):
        print("New letter: " + input[:i])

    shuffled = ''.join(random.sample(input, len(input)))
    print("Random:" +shuffled)
