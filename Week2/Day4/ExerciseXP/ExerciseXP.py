
import os
import random

# dir_path = os.path.dirname(os.path.realpath(__file__))

# def get_words_from_file():
#         with open(f"{dir_path}/words.txt", "r", encoding="utf-8") as liste_file:
#             output = [line.strip() for line in liste_file]
#             return output
        
# def get_random_sentence(length):
#     length = int(length)
#     liste = get_words_from_file()
#     tour = 0
#     final = []
#     while tour < length:
#             mot = random.choice(liste)
#             choix = final.append(mot)
#             tour += 1
#     phrase = " ".join(final).capitalize() + "."
#     return phrase

# #print(get_random_sentence(5))

# def main():
#     longueur = int(input(f"Choisissez le nombre de mots désirés: "))
#     if 2 <= longueur <= 20:
#         print(get_random_sentence(longueur))
#     else:
#         raise TypeError("Le nombre doit etre compris entre 2 et 20.")


# main()

#Ex2:

import json

import json

sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

data = json.loads(sampleJson)

salary = data["company"]["employee"]["payable"]["salary"]
print("Salaire :", salary)

data["company"]["employee"]["birth_date"] = "1990-01-01"

with open("modified_data.json", "w", encoding="utf-8") as f:
    json.dump(data, f, indent=4)
