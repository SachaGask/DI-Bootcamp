
#Try and Except block

# board = [["_", "_", "_"],
#          ["_", "_", "_"],
#          ["_", "_", "_"]
# ]

# def player_input(current_player):
#     valid = False
#     while not valid:
#         try:
#             position = int(input("Enter position 1-9: ")) - 1  # conversion DANS le try
#             if 0 <= position < 9:
#                 if board[position] == "_":
#                     board[position] = current_player
#                     print(board)
#                     valid = True
#                 else:
#                     print("Cette case est déjà prise.")
#             else:
#                 print("Insérez un nombre entre 1 et 9.")
#         except:
#             print("Entrez un nombre valide.")

# player_input("X")
my_list= [1, 2,3,"quatre",5]

try:
    print("Try Bloc:",sum(my_list))
except:
    clean_list = []
    for element in my_list:
        if isinstance in my_list:
            clean_list.append(element)
            output = sum(clean_list)
            print("Except Bloc:",output)
