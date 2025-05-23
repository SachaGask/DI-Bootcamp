
import random

class Game:
    def get_user_item(self):
        user_item = input("Choose between pierre/papier/ciseaux: ")
        if user_item not in ["pierre", "papier", "ciseaux"]:
            print("Invalid choice. Please choose between pierre/papier/ciseaux.")
            return self.get_user_item()
        return user_item

    def get_computer_item(self):
        computer_item = random.choice(["pierre", "papier", "ciseaux"])
        return computer_item

    def get_game_result(self, user_item, computer_item):
        if user_item == computer_item:
            return "Egalité"
        elif (user_item == "pierre" and computer_item == "ciseaux") or \
             (user_item == "papier" and computer_item == "pierre") or \
             (user_item == "ciseaux" and computer_item == "papier"):
            return "Gagné"
        else:
            return "Perdu"

    def play(self):
        user_item = self.get_user_item()
        computer_item = self.get_computer_item()
        result = self.get_game_result(user_item, computer_item)
        print(f"\nTu as choisi : {user_item}")
        print(f"L'ordinateur a choisi : {computer_item}")
        print(f"Résultat : {result}")

jeu = Game()
jeu.play()