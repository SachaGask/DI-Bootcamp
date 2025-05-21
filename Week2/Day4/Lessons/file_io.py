
#File I/O

#Old school way of opening a file with Python //Deprecated
# file_object = open(r"/Users/sacha/Desktop/DI-Bootcamp/Week2/Day4/Lessons/secrets.txt")
# print(file_object)

#Modern Python way (automatically close)

# with open(r"/Users/sacha/Desktop/DI-Bootcamp/Week2/Day4/Lessons/secrets.txt", "r", encoding="utf-8") as file_obj:
#     # output = file_obj.read() #Return the whole content of the file
#     # output = file_obj.readline() #Return just the first line
#     output = file_obj.readlines() #Return a list of lines
#     print(output)

#The file

import os

# dir_path = os.path.dirname(os.path.realpath(__file__))
# print(dir_path)

# with open(f"{dir_path}/secrets.txt","a", encoding="utf-8") as file_obj:
#     # a --> append a new line to the file
#     # w --> write in the file
    
#     names = ["Frodo\n","Pippin\n","Sam\n"]
#     file_obj.writelines(names)
#     print("Added successfully !")

#     dir_path = os.path.dirname(os.path.realpath(__file__))
#     print(dir_path)
