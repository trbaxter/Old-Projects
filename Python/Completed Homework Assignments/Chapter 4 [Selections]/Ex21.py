# Chapter 4 - Exercise 21

import math
import sys

print("This program uses Zeller's congruence algorithm to determine the day of the week.")
print()

try:
    year_input = eval(input("Enter a year: "))
    m = eval(input("Enter a month (1-12): "))
    q = eval(input("Enter the day of the month (1-31): "))
    j = year_input // 100
    k = year_input % 100
    
    if m == 1:
        h = (q + ((26 * (13+1)) // 10) + (k-1) + ( (k-1) // 4) + (j // 4) + 5 * j) % 7
    elif m == 2:
        h = (q + ((26 * (14 +1 )) // 10) + (k - 1) + ((k - 1) // 4) + (j // 4) + 5 * j) % 7
    else:
        h = (q + (26 * (m + 1) // 10) + k + (k // 4) + (j // 4) + 5 * j) % 7

    print()
    if h == 1:
        print("The day of the week is Sunday.")
    elif h == 2:
        print("The day of the week is Monday.")
    elif h == 3:
        print("The day of the week is Tuesday.")
    elif h == 4:
        print("The day of the week is Wednesday.")
    elif h == 5:
        print("The day of the week is Thursday.")
    elif h == 6:
        print("The day of the week is Friday.")
    else:
        print("The day of the week is Saturday.")

except NameError:
    print("Error: inputs must be numbers only..")
    sys.exit(0)

except SyntaxError:
    print()
    print("Error: invalid input entered. Please review input and try again.")
    sys.exit(0)
