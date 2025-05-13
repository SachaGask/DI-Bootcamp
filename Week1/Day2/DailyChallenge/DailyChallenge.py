
#Ex1

#input1 = int(input("Enter a number: "))  # ex: 7
#input2 = int(input("Enter a length: "))  # ex: 5

#for number in range(1, input1 * input2 + 1):
#    if number % input1 == 0:
#        print(number)

#Ex2

chaine = input("Entrez une chaine : ")
chaine_modifiee = ""
for i in range(len(chaine)):
    if i == 0 or chaine[i] != chaine[i-1]:
        chaine_modifiee += chaine[i]
print(chaine_modifiee)

