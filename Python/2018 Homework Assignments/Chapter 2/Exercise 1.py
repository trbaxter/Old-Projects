'''
Chapter 2 - Exercise 1
Write a program that reads a temperature in degrees Celsius from the console,
converts it to degrees Fahrenheit, and displays the result. 
'''

celsius_temp = eval(input("Enter a temperature in degrees Celsius: "))
fahrenheit_temp = (9/5)*celsius_temp+32
print(celsius_temp, "°C is equal to", fahrenheit_temp, "°F.")
