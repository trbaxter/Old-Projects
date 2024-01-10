# Chapter 5 - Exercise 28

import random

def fizzbuzz(N):
    for i in range (1, N + 1):
        if i % 3 == 0 and i % 5 == 0:
            print("FizzBuzz")
        elif i % 3 == 0:
            print("Fizz")
        elif i % 5 == 0:
            print("Buzz")
        else:
            print(i)

def main():
    print("This program represents the 'Fizzbuzz' problem.")
    print()
    print("- If an integer is divisible by 3, the word Fizz will be displayed.")
    print("- If an integer is divisible by 5, the word Buzz will be displayed.")
    print("- If an integer is divisible by 3 AND 5, the word FizzBuzz will be displayed.")
    print("All other integers will be displayed normally.")
    print()

    N = eval(input("Enter the number of integers to be investigated: "))
    print()
    fizzbuzz(N)
    
main()
