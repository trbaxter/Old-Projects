'''
Chapter 2 - Exercise 10
Given an airplane's acceleration a and take-off speed v, compute the minimum runway length
needed for an airplane to take off. Write a program that prompts the user to enter v in meters/second
and the acceleration a in meters/second², and displays the minimum runway length.
'''

velocity, acceleration = eval(input("To determine the minimum runway length, \nplease enter the take-off speed (in m/s) and acceleration (in m/s²) separated by a comma: "))

'''
From kinematics, v_final^2 = v_initial^2 + 2a(distance)

Assuming v_initial = 0 at takeoff:

v_final^2 = 2a(distance)
v_final^2/2a = distance
'''

distance = velocity**2/(2*acceleration)
print("The required runway length is: ", '{:.2f}'.format(distance), "m")
# Distance truncated to two decimal places using {:.2f}.format(distance)
