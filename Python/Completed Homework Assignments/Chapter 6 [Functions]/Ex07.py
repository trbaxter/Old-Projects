# Chapter 6 - Exercise 7

print("This program computes the future investment value for an investment and displays the total over 30 years.")
print()
def futureInvestmentValue(investmentAmount, annualInterestRate, years):
    futureValue = investmentAmount*((1+((annualInterestRate)/12))**(years*12))
    return futureValue


def main():
    try:
        x = eval(input("Enter the integer value of initial investment of the account: "))
        y = eval(input("Enter the integer value of the annual percent interest rate: "))
        print()
        print("  Years     " + "Future Value")
        for i in range(1, 31, 1):
            print(format(i, ">6d"), format(futureInvestmentValue(x, (y / 100), i), ">17.2f"))
    except NameError:
        print()
        print("Please enter a valid value for the investment quantity and interest rate.")

main()
