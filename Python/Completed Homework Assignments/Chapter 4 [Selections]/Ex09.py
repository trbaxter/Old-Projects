# Chapter 4 - Exercise 9

import math
import sys

print("This program compares the price per weight of two packages and displays the entry with the better price.")
print()

try:
    weight1 = eval(input("Enter the weight of the first package: "))
    if weight1 <= 0:
        print()
        print("Weight must be greater than zero.")
        sys.exit(0)
        
    price1 = eval(input("Enter the price of the first package: "))
    if price1 <= 0:
        print()
        print("Price must be greater than zero.")
        sys.exit(0)
        
    weight2 = eval(input("Enter the weight of the second package: "))
    if weight2 <= 0:
        print()
        print("Weight must be greater than zero.")
        sys.exit(0)
    
    price2 = eval(input("Enter the price of the second package: "))
    if price2 <= 0:
        print()
        print("Price must be greater than zero.")
        sys.exit(0)

    priceperweight1 = price1/weight1
    priceperweight2 = price2/weight2
    
    if priceperweight1 < priceperweight2:
        print()
        print("The first package has the better price.")
        
    elif priceperweight1 == priceperweight2:
        print()
        print("The packages are of equal value.")
        
    else:
        print()
        print("The second package has the better price.")

except NameError:
    print()
    print("Error: only numerical values are allowed for the weight and price of the packages.")
    sys.exit(0)

except ZeroDivisionError:
    print()
    print("Error: values entered results in division by zero.")
    sys.exit(0)

except SyntaxError:
    print()
    print("Error: invalid input entered. Please review input and try again.")
    sys.exit(0)
