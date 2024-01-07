# Chapter 3 - Exercise 11

import sys
import math

print("This program reverses a four-digit integer entered by a user.\n")
x = eval(input("Enter the integer to be reversed: "))

x_str = str(x)

if len(x_str) != 4:
    print("Error: incorrect integer length.")
    sys.exit(0)

digit_4 = x % 10
digit_4_str = str(digit_4)

digit_3 = math.floor(x // 10) % 10
digit_3_str = str(digit_3)

digit_2 = math.floor(x // 100) % 10
digit_2_str = str(digit_2)

digit_1 = math.floor(x // 1000) % 10
digit_1_str = str(digit_1)

reverse_sum_str = digit_4_str + digit_3_str + digit_2_str + digit_1_str

print("The reversal of " + x_str + " is " + reverse_sum_str + ".")
