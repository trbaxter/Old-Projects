# Chapter 2 - Exercise 6

import sys
import math

print("This program sums the individual digits of an integer.\n")
x = eval(input("Enter an integer between 0 and 1,000: "))

if (x < 0 or x == 0) or (x > 1000 or x == 1000):
    print("This number is outside the valid range.")
    sys.exit(0)
elif isinstance(x, float):
    print("Float values are not valid, use integers only.")
    sys.exit(0)

x_str = str(x)

digit_3 = x % 10
digit_3_str = str(digit_3)

digit_2 = math.floor(x // 10) % 10
digit_2_str = str(digit_2)

digit_1 = math.floor(x // 100) % 10
digit_1_str = str(digit_1)

digit_sum = digit_1 + digit_2 + digit_3
digit_sum_str = str(digit_sum)

print("For the number " + x_str + ", the first digit is " + digit_1_str + ", the second digit is " + digit_2_str + ", and the third digit is " + digit_3_str + ".\n")
print("The sum of the digits is " + digit_sum_str + ".")
