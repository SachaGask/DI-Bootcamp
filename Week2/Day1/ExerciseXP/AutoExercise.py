
# class Car:
#     def __init__(self,model,color):
#         self.model = model
#         self.color = color

#     def get_info(self):
#         print (f"The {self.color} {self.model} was made in {self.year}")

# car1 = Car("Toyota Yaris","Blue","2020")

#car1.get_info()

class Book:
    def __init__(self, title,author,year):
        self.title = title
        self.author = author
        self.year = year

    def description(self):
        print (f"{self.title} was written by {self.author} in {self.year}")
        return

petit_prince = Book("The Petit Prince","Antoine de Saint-Exupéry","1943")

petit_prince.description()