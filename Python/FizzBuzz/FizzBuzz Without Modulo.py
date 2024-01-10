# This is an alternate program for FizzBuzz that doesn't rely on the modulo operation. 

def fizzbuzz(N):
    for i in range (1, N + 1):
        if (i/3).is_integer() == True and (i/5).is_integer() == True:
            print("FizzBuzz")
# If this line isn't first, the program sees multiples of 15 as div. by 3 only and displays Fizz.
        elif (i/3).is_integer() == True:
            print("Fizz")
        elif (i/5).is_integer() == True:
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
