import re

MATRIX_STR = '''
7ii
Tsx
h%?
i #
sM 
$a 
#t%'''

# Step 1: Convert to 2D list
matrix = [list(row) for row in MATRIX_STR.strip().split('\n')]

# Step 2: Read columns top-to-bottom, left-to-right
column_text = ""
for col in range(len(matrix[0])):
    for row in range(len(matrix)):
        column_text += matrix[row][col]

# Step 4: Replace symbol groups between letters with a space
decoded_message = re.sub(r'(?<=[a-zA-Z])[^a-zA-Z]+(?=[a-zA-Z])', ' ', column_text)

# Step 5: Print the final message
print(decoded_message)
