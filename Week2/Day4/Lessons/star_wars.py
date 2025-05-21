#Exercise

# with open(r"/Users/sacha/Desktop/DI-Bootcamp/Week2/Day4/Lessons/starwars.txt", encoding="utf-8") as starwars:
#     while True:
#         line = starwars.readline()
#         if not line:
#             break
#         print(line)

import os

dir_path = os.path.dirname(os.path.realpath(__file__))
with open (f"{dir_path}/starwars.txt","a+", encoding="utf-8") as starwars_return:
    #bullet 4
    file_list = starwars_return.readlines()
    print(file_list)
    
    updated_name = []
    for i, name in enumerate(list,str):
        if name == "Luke\n":
            starwars_return.write
        else:
            pass


# with open (f"{dir_path}/starwars.txt","a", encoding="utf-8") as starwars_append:
#     for line in file_list:
#         if line == "Luke":
#             line.append("SkyWalker")
#         else:
#             pass
#     print(file_list)