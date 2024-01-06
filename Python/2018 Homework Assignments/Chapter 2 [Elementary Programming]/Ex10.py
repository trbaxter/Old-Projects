# Chapter 2 - Exercise 10

velocity, acceleration = eval(input("To determine the minimum runway length, \nplease enter the take-off speed (in m/s) and acceleration (in m/s²) separated by a comma: "))

'''
From kinematics, (velocity_final)^2 = (velocity_initial)^2 + 2(acceleration)(distance)

Assuming velocity_initial = 0 at takeoff:

(velocity_final)^2 = 2(acceleration)(distance)
(velocity_final)^2/(2*acceleration) = distance
'''

distance = velocity**2/(2*acceleration)
print("The required runway length is: ", '{:.2f}'.format(distance), "m")
# Distance truncated to two decimal places using {:.2f}.format(distance)
