from game import Game

# Dictionnaire pour garder les scores
results = {"Gagné": 0, "Perdu": 0, "Égalité": 0}

def get_user_menu_choice():
    print("\nBienvenue sur Pierre, Papier, Ciseaux !")
    print(" - 1: Jouer à une nouvelle partie")
    print(" - 2: Afficher les scores")
    print(" - 3: Quitter")

    choix = input("Faites votre choix: ").strip()

    while choix not in ["1", "2", "3"]:
        print("Choix invalide. Essayez encore.")
        choix = input("Faites votre choix: ").strip()

    return choix

def print_results(results):
    print("\nRésultats :")
    for resultat, nombre in results.items():
        print(f"- {resultat} : {nombre}")
    print("\nMerci d'avoir joué !")

def main():
    while True:
        choix = get_user_menu_choice()

        if choix == "1":
            jeu = Game()
            resultat = jeu.play()  # doit retourner "Gagné", "Perdu", ou "Égalité"
            if resultat in results:
                results[resultat] += 1

        elif choix == "2":
            print_results(results)

        elif choix == "3":
            print_results(results)
            break

if __name__ == "__main__":
    main()