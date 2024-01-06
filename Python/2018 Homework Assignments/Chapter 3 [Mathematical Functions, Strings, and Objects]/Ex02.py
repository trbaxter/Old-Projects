# Chapter 3 - Exercise 2

import math
import sys

print("This program calculates the great circle distance in kilometers between two points on the Earth using latitude and longitude values.")
print("\n")
x1 = eval(input("Enter a latitude between -90° and 90° for the first point: "))
if x1 < -90 or x1 > 90:
    print("Error: Latitude entered is outside the valid range.")
    sys.exit(0)
y1 = eval(input("Enter a longitude between -180° and 180° for the first point: "))
if y1 < -180 or y1 > 180:
    print("Error: Longitude entered is outside the valid range.")
    sys.exit(0)
x2 = eval(input("Enter a latitude between -90° and 90° for the second point: "))
if x2 < -90 or x2 > 90:
    print("Error: Latitude entered is outside the valid range.")
    sys.exit(0)
y2 = eval(input("Enter a longitude between -180° and 180° for the second point: "))
if y2 < -180 or y2 > 180:
    print("Error: Longitude entered is outside the valid range.")
    sys.exit(0)
# Added error exits that terminates the program if a user enters an invalid value

x1_str = str(x1)
x2_str = str(x2)
y1_str = str(y1)
y2_str = str(y2)
# Converting input integers to strings to concatenate in final displace (as integers and strings can't be concatenated together)

x1_rad = math.pi/180 * x1
x2_rad = math.pi/180 * x2
y1_rad = math.pi/180 * y1
y2_rad = math.pi/180 * y2
# Converting the input values from degrees to radians for use with trig functions

d = (6371.01) * math.acos( (math.sin(x1_rad) * math.sin(x2_rad)) + (math.cos(x1_rad) * math.cos(x2_rad) * math.cos(y1_rad - y2_rad))) 
print("\n")
print("The great circle distance between (" + x1_str +"°, " + y1_str + "°) and ("+ x2_str + "°, " + y2_str + "°) is", '{:.2f}'.format(d), "km.")
