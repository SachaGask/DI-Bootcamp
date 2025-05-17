
#Mini Project N°1 - Tic Tac Toe

#Board
display_board = [
    ["_", "_", "_"],
    ["_", "_", "_"],
    ["_", "_", "_"]
]

# Vérifier si gagnant avant loop
def check_win(board, player):
    
    # Lignes gagnantes
    for ligne in board:
        if ligne == [player, player, player]: #Si dans chaque ligne on a X, X, X
            return True
    # Colonnes gagnantes
    for colonne in range(3):
        if board[0][colonne] == board[1][colonne] == board[2][colonne] == player:
            return True
    # Diagonales
    if board[0][0] == board[1][1] == board[2][2] == player:
        return True
    if board[0][2] == board[1][1] == board[2][0] == player:
        return True
    return False

# Joueur actuel
current_player = "X"

# Loop après vérification
while any("_" in row for row in display_board):
    for row in display_board:
        print(" ".join(row))


    # Choisir une case valide
    while True:
        try:
            line = int(input(f"{current_player}, choose a line: ")) - 1
            column = int(input(f"{current_player}, choose a column: ")) - 1

            if 0 <= line <= 2 and 0 <= column <= 2:
                if display_board[line][column] == "_":
                    break
                else:
                    print("Cell is already taken.")
            else:
                print("Choose a valid number.")
        except ValueError:
            print("Enter a valid number.")

    # Placer le symbole
    display_board[line][column] = current_player

    # Vérifier victoire
    if check_win(display_board, current_player):
        for row in display_board:
            print(" ".join(row))
        print(f" {current_player} wins!")
        break

    # Passer au joueur suivant
    current_player = "O" if current_player == "X" else "X"

else:
    # Si on sort de la boucle sans victoire
    for row in display_board:
        print(" ".join(row))
    print("It's a draw!")

