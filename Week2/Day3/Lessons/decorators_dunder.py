from datetime import datetime, date

class Person:
    def __init__(self, name, last_name, birth_date):
        self.name = name
        self.last_name = last_name
        self.birth_date = self.parse_birthdate(birth_date)

    @classmethod
    def from_age(cls, name, last_name, age):
        current_date = date.today()
        birth_year = current_date.year - age
        birth_date = f"{birth_year}-01-01"
        return cls(name, last_name, birth_date)

    @staticmethod
    def parse_birthdate(date_string):
        return datetime.strptime(date_string, "%Y-%m-%d").date()

    def to_upper(self):
        self.name = self.name.capitalize()
        self.last_name = self.last_name.capitalize()
        return f"{self.name} {self.last_name}"

    @property
    def age(self):
        today = date.today()
        return today.year - self.birth_date.year

    def __str__(self):
        return f"{self.name} {self.last_name} was born on {self.birth_date}: \nAge: {self.age} ans."

    def __repr__(self):
        return f"{self.__dict__}"
    
    def __eq__(self, other):
        return self.age == other.age

    def __lt__(self, other):
        return self.age > other.age


# Test
p1 = Person.from_age("Juliana", "Schmidt", 35)
p2 = Person.from_age("Max", "Carlos", 35)
print(p1 == p2)
print(p1 > p2)

#print(p3.to_upper())
#print(p1.__str__())

