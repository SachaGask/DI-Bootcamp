
import os
from anagram_checker import AnagramChecker

def main():
    dir_path = os.path.dirname(os.path.realpath(__file__))
    file_path = os.path.join(dir_path, "sowpods.txt")
    checker = AnagramChecker(file_path)

    while True:
        print("\n--- ANAGRAM CHECKER ---")
        print("1. Input a word")
        print("2. Exit")

        choice = input("Choose an option (1 or 2): ").strip()

        if choice == "2":
            print("Goodbye!")
            break
        elif choice != "1":
            print("Invalid option. Try again.")
            continue

        user_input = input("Enter a word: ").strip()

        if " " in user_input.strip():
            print("❌ Error: Please enter only one word.")
            continue
        if not user_input.isalpha():
            print("❌ Error: Only alphabetic characters are allowed.")
            continue

        word = user_input.strip()
        upper_word = word.upper()

        print(f"\nYOUR WORD: \"{upper_word}\"")

        if checker.is_valid_word(word):
            print("This is a valid English word.")
        else:
            print("This is NOT a valid English word.")

        anagrams = checker.get_anagrams(word)

        if anagrams:
            print("Anagrams for your word:", ", ".join(anagrams).lower())
        else:
            print("No anagrams found.")

if __name__ == "__main__":
    main()
