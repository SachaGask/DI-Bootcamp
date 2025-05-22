import os
import random

dir_path = os.path.dirname(os.path.realpath(__file__))
file_path = os.path.join(dir_path, "sowpods.txt")

class AnagramChecker:
    def __init__(self, file):
        self.file = file

    def is_valid_word(self, word):
        word = word.strip().upper()
        with open(self.file, "r") as f:
            words = f.read().splitlines()
        if word in words:
            print("Mot existant.")
        else:
            print("Mot inconnu.")
        
    def get_anagrams(self, word):
        anagrams = []
        word = word.strip().upper()
        sorted_word = sorted(word)
    
        with open(self.file, "r") as file:
            for line in file:
                candidate = line.strip().upper()
                if candidate != word and sorted(candidate) == sorted_word:
                    anagrams.append(candidate)
    
        return anagrams


checker = AnagramChecker(file_path)
print(checker.get_anagrams("Meat"))



# 1: recuperer le mot
# 2: recuperer les lettres
# 3: recuperer d'autres mots du fichier qui ont les memes lettres
# 4: s'il y en a, les ajouter dans une liste
# 5: afficher la liste

    