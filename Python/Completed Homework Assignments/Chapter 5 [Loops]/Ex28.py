# Chapter 5 - Exercise 28

import math
from decimal import Decimal, getcontext
# Floating point numbers are insufficient for this problem, imported decimal for greater precision

print("This program generates a numerical approximation of the mathematical constant e.")
print("Warning: large numbers of decimal digits are used in this calculation to ensure accuracy. This will take a very long time to finish.")
print()

e = 0
i = 0

getcontext().prec = 100

while i < 100000:
    e += 1/Decimal(math.factorial(i))
    i += 1
    if i % 10000 == 0:
        print("The approximation using", i, "iterations is:", e)
