# Chapter 6 - Exercise 1

def getPentagonalNumber(n):
    return n*(3*n - 1)//2

def PentagonalNumberArray(number_of_p):
    Number_of_Pentagonals = 100
    Number_of_Pentagonals_Per_Line = 10
    count = 1
    n = 1

    while count < number_of_p:
        for i in range(1,101):
            print(format(getPentagonalNumber(i), "5d"), end = "\t")
            count += 1
            if count % Number_of_Pentagonals_Per_Line == 1:
                print()

def main():
    print("The first 100 pentagonal numbers are: ")
    print()
    PentagonalNumberArray(100)

main()
