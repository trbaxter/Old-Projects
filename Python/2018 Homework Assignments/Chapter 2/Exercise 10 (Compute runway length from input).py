'''
Chapter 2 - Exercise 10
Given an airplane's acceleration a and take-off speed v, compute the minimum runway length
needed for an airplane to take off. Write a program that prompts the user to enter v in meters/second
and the acceleration a in meters/second², and displays the minimum runway length.
'''

velocity, acceleration = eval(input("To determine the minimum runway length, \nplease enter the take-off speed (in m/s) and acceleration (in m/s²) separated by a comma: "))

'''
From kinematics, (velocity)^2 = (velocity_initial)^2 + 2a(distance)

Assuming velocity_initial = 0 at takeoff:

(velocity)^2 = 2a(distance)
(velocity)^2/2a = distance
'''

distance = velocity**2 / 2*acceleration
print("The required runway length is: ", distance, "m")
