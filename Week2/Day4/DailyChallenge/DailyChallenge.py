import string
import re
from collections import Counter

class Text:
    def __init__(self, text):
        self.text = text

    def word_frequency(self, word):
        words = self.text.lower().split()
        word_count = words.count(word.lower())
        return word_count if word_count > 0 else None

    def most_common_word(self):
        words = self.text.lower().split()
        frequencies = Counter(words)
        if frequencies:
            return frequencies.most_common(1)[0][0]
        return None

    def unique_words(self):
        words = self.text.lower().split()
        return list(set(words))

    @classmethod
    def from_file(cls, file_path):
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()
        return cls(content)

class TextModification(Text):
    def remove_punctuation(self):
        translator = str.maketrans("", "", string.punctuation)
        cleaned = self.text.translate(translator)
        return cleaned

    def remove_stop_words(self):
        stop_words = {
            "a", "an", "the", "is", "in", "at", "on", "and", "or", "of", "for", "to", "with", "by", "as", "from"
        }
        words = self.text.split()
        filtered = [word for word in words if word.lower() not in stop_words]
        return " ".join(filtered)

    def remove_special_characters(self):
        cleaned = re.sub(r"[^A-Za-z0-9\s]", "", self.text)
        return cleaned

txt = TextModification("The sun is in the sky. The sky is blue, and the sun shines!")
print("Freq 'sun':", txt.word_frequency("sun"))
print("Most common word:", txt.most_common_word())
print("Unique words:", txt.unique_words())
print("Without punctuation:", txt.remove_punctuation())
print("Without stop words:", txt.remove_stop_words())
print("Without special characters:", txt.remove_special_characters())
