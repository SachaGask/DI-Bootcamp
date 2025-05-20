#Ex1

# class Currency:
#     def __init__(self, currency, amount):
#         self.currency = currency
#         self.amount = amount

#     def __str__(self):
#         return f"{self.amount} {self.currency}s"

#     def __repr__(self):
#         return self.__str__()

#     def __int__(self):
#         return int(self.amount)

#     def __add__(self, other):
#         if isinstance(other, Currency):
#             if self.currency != other.currency:
#                 raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
#             return self.amount + other.amount
#         elif isinstance(other, (int, float)):
#             return self.amount + other
#         else:
#             raise TypeError("Unsupported type for addition")

#     def __iadd__(self, other):
#         if isinstance(other, Currency):
#             if self.currency != other.currency:
#                 raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
#             self.amount += other.amount
#         elif isinstance(other, (int, float)):
#             self.amount += other
#         else:
#             raise TypeError("Unsupported type for in-place addition")
#         return self

# c1 = Currency('dollar', 5)
# c2 = Currency('dollar', 10)
# c3 = Currency('shekel', 1)
# c4 = Currency('shekel', 10)

# print(str(c1))
# # '5 dollars'
# print(int(c1))
# # 5
# print(repr(c1))
# # '5 dollars'

# print(c1 + 5)
# # 10
# print(c1 + c2)
# # 15
# print(c1)
# # 5 dollars

# c1 += 5
# print(c1)
# # 10 dollars

# c1 += c2
# print(c1)
# # 20 dollars

#print(c1 + c3)
# TypeError attendu

#Ex3

# import string
# import random


# all_letters = string.ascii_letters

# random_string = ''
# for _ in range(5):
#     random_char = random.choice(all_letters)
#     random_string += random_char

# print(random_string)

#Ex4

import datetime

# def show_current_date():
#     current_date = datetime.date.today()
#     print("Current date:", current_date)

#Ex5

# def time_until_new_year():
#     now = datetime.datetime.now()
#     next_year = now.year + 1
#     jan_first = datetime.datetime(year=next_year, month=1, day=1)
#     time_left = jan_first - now
#     print("Time left until January 1st:", time_left)

# time_until_new_year()

#Ex6

# def minutes_lived(birthdate_str):
#     birthdate = datetime.datetime.strptime(birthdate_str, "%Y-%m-%d")
    
#     now = datetime.datetime.now()
    
#     time_lived = now - birthdate
    
#     minutes = time_lived.total_seconds() / 60
    
#     print(f"You have lived approximately {int(minutes):,} minutes.")

# minutes_lived("2001-01-15")

#Ex7

from faker import Faker

users = []

def generate_fake_users(n):
    fake = Faker()
    for _ in range(n):
        user = {
            "name": fake.name(),
            "address": fake.address(),
            "language_code": fake.language_code()
        }
        users.append(user)

generate_fake_users(3)

for user in users:
    print(user)
