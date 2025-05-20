class Humain:
    def __init__(self, nom):
        print("Init Humain")
        self.nom = nom

    def parle(self):
        print(f"{self.nom} parle une langue humaine.")

class Chat(Humain):
    def __init__(self, nom):
        print("Init Chat")
        super().__init__(nom)  # Appelle __init__ de Humain

    def miaule(self):
        print("Miaou 🐱")

# Test
c = Chat("Luna")
c.parle()
c.miaule()