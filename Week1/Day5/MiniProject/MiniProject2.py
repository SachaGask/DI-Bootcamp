import random

#1 Choix du mot par l'ordinateur
wordslist = ['correction', 'childish', 'beach', 'python', 'assertive', 'interference', 'complete', 'share', 'credit card', 'rush', 'south']
word = random.choice(wordslist) 

#2: Afficher des étoiles pour chaque lettre du mot

print(word)
realword = word
word = "*" * len(word)
print(f"Voici le mot à deviner: {word} ({len(word)} lettres)")

#4 Deviner et remplacer la lettre dans le mot avec l'index
utilisees = list()
reussite = 0
occurences = []

while realword:
    choix = input("Devinez une lettre: ")

    if choix not in utilisees:
        utilisees.append(choix)

        if word == realword:
            print(f"Bravo, le mot était '{word}'")
            break

        elif choix in realword:
            new_word = list(word)
            for i in range(len(realword)):
                if realword[i] == choix:
                    new_word[i] = choix
            word = "".join(new_word)
            #position = realword.index(choix) + 1
            #word = word[:position - 1] + choix + word[position:]
            print(f"Bravo, '{choix}' est dans le mot: {word} !")
            reussite += 1
            if word == realword:
                print(f"Bravo, le mot était '{word}'")
                continue

        else:
            chances = 6 - len(utilisees) + reussite
            print(f"Non ! Vous avez encore {chances} chances.")

            if chances == 0:
                print(f"PENDU ! Le mot était '{realword}'.")
                break
    
    else:
        print("Vous avez déjà choisi cette lettre.")
        continue