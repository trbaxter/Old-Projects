# Chapter 3 - Exercise 10

import sys

print("Weekly Employee Payroll Generator")
print("Please provide the following:\n")

name = input("Employee name: ")
1
stripped_name = name.strip()
# Remove erroneous spaces at beginning & end of name

if any(char.isdigit() for char in stripped_name):
    print("Error: employee name must contain letters only.")
    sys.exit(0)
# Name rejected if character that isn't a letter is found

elif len(stripped_name) == 0:
    print("Error: employee name cannot be empty.")
    sys.exit(0)
# Name rejected if empty

elif stripped_name == "null":
    print("Error: employee name cannot be null.")
    sys.exit(0)
# Name rejected if null

week_hours = eval(input("Number of hours worked in the week: "))

if week_hours < 0:
    print("Error: hours worked must be greater than or equal to zero.")
    sys.exit(0)

payrate = eval(input("Hourly pay rate: "))

if payrate < 0:
    print("Error: pay rate must be a positive value.")
    sys.exit(0)

fed_tax = eval(input("Federal tax withholding rate (percent value between 0 and 100): "))

if fed_tax < 0:
    print("Error: federal tax withholding rate must be a positive percentage.")
    sys.exit(0)

elif fed_tax > 100:
    print("Error: federal tax withholding rate cannot be greater than 100%!")

state_tax = eval(input("State tax withholding rate (percent value between 0 and 100): "))

if state_tax < 0:
    print("Error: state tax withholding rate must be a positive percentage.")
    sys.exit(0)

elif state_tax > 100:
    print("Error: state tax withholding rate cannot be greater than 100%!")

gross_pay = week_hours * payrate
gross_pay_str = str(gross_pay)
payrate_str = str(payrate)
fed_tax_str = str(fed_tax)
state_tax_str = str(state_tax)
fed_tax_withhold = fed_tax/100 * gross_pay
fed_tax_withhold_str = str(fed_tax_withhold)
state_tax_withhold = state_tax/100 * gross_pay
state_tax_withhold_str = str(state_tax_withhold)
total_withhold = fed_tax_withhold + state_tax_withhold
total_withhold_str = str(total_withhold)
net_pay = gross_pay - total_withhold
net_pay_str = str(net_pay)
# Calculation & string creation section

print("\n")
print("---- Payroll Output ----")
print("Employee name: " + stripped_name)
print("Hours worked:", week_hours)
print("Pay rate: $" + payrate_str + "/hour")
print("Gross pay: $" + gross_pay_str)
print("Deductions:")
print("    Federal withholding (" + fed_tax_str + "%): $" + fed_tax_withhold_str)
print("    State withholding (" + state_tax_str + "%): $" + state_tax_withhold_str)
print("    Total deduction: $" + total_withhold_str)
print("Net pay: $" + net_pay_str)
print("----------------------------")
