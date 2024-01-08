# Chapter 4 - Exercise 1

import math
import sys

print("This program solves for the real-valued roots of a quadratic equation ax^2 + bx + c = 0.")
print()
try:
    a = eval(input("Enter the value of a: "))
    b = eval(input("Enter the value of b: "))
    c = eval(input("Enter the value of c: "))
    discriminant = (b**2 - 4*a*c)
    
    if discriminant > 0:
        root1 = round((-1*b + math.sqrt(b**2 - 4*a*c))/(2*a),2)
        root1_str = str(root1)
        root2 = round((-1*b - math.sqrt(b**2 - 4*a*c))/(2*a),2)
        root2_str = str(root2)
        print()
        print("The roots of this quadratic equation are " + root1_str + " and " + root2_str + ".")
        
    elif discriminant == 0:
        Root3 = int((-1*b + math.sqrt(b**2 - 4*a*c))/(2*a))
        print()
        print("The singular root is",Root3,)
        
    else:
        print()
        print("This equation has no real roots.")
        
except NameError:
    print()
    print("Error: only numeric values can be entered for a, b, and c.")
    sys.exit(0)

except ZeroDivisionError:
    print()
    print("Error: values entered results in division by zero.")
    sys.exit(0)

except SyntaxError:
    print()
    print("Error: invalid input entered. Please review input and try again.")
    sys.exit(0)
