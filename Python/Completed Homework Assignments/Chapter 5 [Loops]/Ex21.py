# Chapter 5 - Exercise 21

print("This program generates a numeric pyramid pattern using a nested for loop.")
print()

rows = 7
field_length = len(str(rows))
for i in range(1, rows + 1):
    for j in range(1, rows - i + 1):
        print("  " * field_length, end = " ")
    for j in range(i, 0, -1):
        print(f"{j:{field_length}}", end = " ")
    for j in range(2, i + 1):
        print(f"{j:{field_length}}", end = " ")
    print()
