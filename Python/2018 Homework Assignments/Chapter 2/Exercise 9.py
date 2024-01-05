'''
Chapter 2 - Exercise 9
How cold is it outside? The temperature alone is not enough to provide the answer.
Other factors including wind speed, relative humidity, and sunshine play important roles
in determining coldness outside. In 2001, the National Weather Service (NWS) implemented
the new wind-chill temperature to measure the coldness using temperature and wind speed.
The formula is:

t_wc = 35.74 + 0.6215*t_a - 35.75v^(0.16) + 0.4275*t_a*v^(0.16)

Where t_a is the outside temperature measured in °F, v is the wind speed measured in mph,
and t_wc is the wind-chill temperature. The formula cannot be used for wind speeds below
2 mph or for temperatures below -58 °F or above 41 °F.

Write a program that prompts the user to enter a temperature between -58 °F and 41 °F and
a wind speed greater than or equal to 2 mph and displays the wind-chill temperature.
'''
import sys

print("To calculate the wind-chill temperature, please provide the following below.\n")
temp_f = eval(input("Enter a temperature between -58 °F and 41 °F: "))
if temp_f < -58 or temp_f > 41:
    print("Error: Temperature entered outside valid range.")
    sys.exit(0)
# sys.exit(0) used to terminate the program upon bad entry with a custom error message
    
windspeed = eval(input("Enter a wind speed (must be at least 2 miles per hour): "))
if windspeed <2:
    print("Error: Windspeed entered too low.")
    sys.exit(0)

temp_wc = 35.74 + 0.6215*temp_f - 35.75*windspeed**(0.16) + 0.4275*temp_f*windspeed**(0.16)

print("The wind chill temperature is:", '{:.1f}'.format(temp_wc), "°F")




