# Chapter 3 - Exercise 9

import sys

print("ASCII Character Finder\n")
x_input = eval(input("Please enter a value between 0 and 127 to find the associated ASCII character: "))
if x_input < 0 or x_input > 127:
    print("Value entered is outside valid range. Please try again.")
    sys.exit(0)

x_rounded = round(x_input)
# Input needs to be rounded to nearest whole integer since no ASCII characters have decimals
x_str = str(x_rounded)
# Input value rounded and returned as string for final display
x_ascii = chr(x_rounded)
# 

print("The ASCII character for the value " + x_str + " is: " + x_ascii)
