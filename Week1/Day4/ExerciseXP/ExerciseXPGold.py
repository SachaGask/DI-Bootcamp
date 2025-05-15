
def get_age(year, month, day):
    year_now = 2025
    month_now = 5
    age = year_now - year
    print(f"Vous avez {age} ans.")


date_of_birth = get_age(2000, 1, 1)

def can_retire(gender, date_of_birth):
    if gender == "homme":
        if date_of_birth < 1958:
            print("Vous pouvez prendre votre retraite.")
        else:
            print("Vous ne pouvez pas prendre votre retraite.")
    if gender == "femme":
        if date_of_birth < 1963:
            print("Vous pouvez prendre votre retraite.")
        else:
            print("Vous ne pouvez pas prendre votre retraite.")
    
can_retire("homme", 2000)




# Instructions
# L'objectif de l'exercice est de vérifier si une personne peut prendre sa retraite en fonction de son âge et de son sexe.
# Remarque : supposons que l'âge de la retraite soit de 67 ans pour les hommes et de 62 ans pour les femmes (nées après avril 1947).


# Elle doit l'appeler get_age(avec quels arguments ?) afin de recevoir un âge.
# Elle dispose désormais de toutes les informations nécessaires pour déterminer si la personne ayant le sexe et la date de naissance indiqués peut prendre sa retraite ou non.
# Calculez. Vous devrez peut-être coder un peu plus ici.
# Revenez Truesi la personne peut prendre sa retraite, et Falsesi elle ne le peut pas.