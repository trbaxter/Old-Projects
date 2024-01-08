# Chapter 5 - Exercise 9

print("This program calculates the future tuition cost for attending university.")
print()
print("The current university tuition cost is $10,000 per year.")
print()

cost_initial = 10000
cost_sum = 0

future_cost = 10000*(1 + 1.05*9)
future_cost_format = '{:,.0f}'.format(future_cost)
future_cost_str = str(future_cost_format)


for i in range(9,13):
    cost_sum += 10000 * (1 + 1.05*i)
    cost_sum_formatted = '{:,.0f}'.format(cost_sum)
    cost_sum_str = str(cost_sum_formatted)

print("Assuming a constant 5% increase in tuition every year, the price of tuition after ten years will be " + "$" + future_cost_str + ".")
print("The total cost of four years' worth of tuition at this point will be " + "$" + cost_sum_formatted + ".") 
