# Chapter 2 - Exercise 9

import sys

print("To calculate the wind-chill temperature, please provide the following below.\n")
temp_f = eval(input("Enter a temperature between -58 °F and 41 °F: "))
if temp_f < -58 or temp_f > 41:
    print("Error: Temperature entered is outside valid range.")
    sys.exit(0)
# sys.exit(0) used to terminate the program upon bad entry with a custom error message
    
windspeed = eval(input("Enter a wind speed (must be at least 2 miles per hour): "))
if windspeed <2:
    print("Error: Windspeed entered is too low.")
    sys.exit(0)

temp_wc = 35.74 + 0.6215*temp_f - 35.75*windspeed**(0.16) + 0.4275*temp_f*windspeed**(0.16)

print("The wind chill temperature is:", '{:.1f}'.format(temp_wc), "°F")
