# Chapter 1 - Exercise 11

print("This program calculates the future population of a region over the next five years given the following:\n")
print("- A current population of 312,032,486")
print("- One birth every 7 seconds")
print("- One death every 13 seconds")
print("- One immigration every 45 seconds\n")

pop_start = 312032486

seconds_annual = 60*60*24*365

pop_year1 = pop_start + (seconds_annual // 7) - (seconds_annual // 13) + (seconds_annual // 45)
pop_year2 = pop_year1 + (seconds_annual // 7) - (seconds_annual // 13) + (seconds_annual // 45)
pop_year3 = pop_year2 + (seconds_annual // 7) - (seconds_annual // 13) + (seconds_annual // 45)
pop_year4 = pop_year3 + (seconds_annual // 7) - (seconds_annual // 13) + (seconds_annual // 45)
pop_year5 = pop_year4 + (seconds_annual // 7) - (seconds_annual // 13) + (seconds_annual // 45)


print("The population at the end of the first year is:",'{:,.0f}'.format(pop_year1),"\n")
print("The population at the end of the second year is:",'{:,.0f}'.format(pop_year2),"\n")
print("The population at the end of the third year is:",'{:,.0f}'.format(pop_year3),"\n")
print("The population at the end of the fourth year is:",'{:,.0f}'.format(pop_year4),"\n")
print("The population at the end of the fifth year is:",'{:,.0f}'.format(pop_year5))
