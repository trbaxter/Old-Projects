# Chapter 4 - Exercise 3

import sys

print("This program solves a 2x2 system of linear equations written in the following form:\n")
print("ax + by = e")
print("cx + dy = f\n")

try:
    a = eval(input("Value of a: "))
    b = eval(input("Value of b: "))
    c = eval(input("Value of c: "))
    d = eval(input("Value of d: "))
    e = eval(input("Value of e: "))
    f = eval(input("Value of f: "))
    print("\n")
except:
    print("Error: invalid input. Equation variables must be numbers only.")
    sys.exit(0)
try:
    x = (e*d - b*f)/(a*d - b*c)
    x_str = str(x)
    y = (a*f - e*c)/(a*d - b*c)
    y_str = str(y)
except:
    print("Error: division by zero not allowed. Equation has no solution.")
    sys.exit(0)
    
print("The value of x is " + x_str + " and the value of y is " + y_str + ".")
