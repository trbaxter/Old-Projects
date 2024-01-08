## Exercise 1 (Solving Quadratic Equations)
The two roots of a quadratic equation can be obtained using the following formula:

$$ x = \dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a}  $$

Where $b^2 - 4ac$ is called the _discriminant_ of the quadratic equation.\
If it is positive, the equation has two real roots.\
If it is zero, the equation has one real root.\
If it is negative, the equation has no real roots.

Write a program that prompts the user to enter values for $a$, $b$, and $c$ and displays the result based on the discriminant.\
If the discriminant is positive, display the two roots. If the discriminant is zero, display one root.\
Otherwise, display to the user that the equation has no real roots.

<br>


## Exercise 3 (Solving Systems of Equations)
Cramer's Rule can be used to solve 2x2 systems of linear equations of the following form:

$$ ax + by = e $$

$$ cx + dy = f $$

Write a program that prompts the user to enter $a$, $b$, $c$, $d$, $e$, and $f$ and display the results for $x$ and $y$.\
If $ad - bc = 0$, report that the equation has no solution. 

<br>


## Exercise 9 (Comparing Costs)
Suppose you shop for rice and find it in two different-sized packages. Write a program to compare the costs of each.


The program should prompt the user to enter the weight and price of each package, then display the one with the better price. 

<br>

## Exercise 21 (Calculating Day From Input)
Zeller's congruence is an algorithm developed by Christian Zeller to calculate the day of the week. The formula is:

$$ h = \Big(q +  \lfloor \dfrac{26(m+1)}{10} \rfloor + k + \lfloor \dfrac{k}{4} \rfloor + \lfloor \dfrac{j}{4} \rfloor + 5j \Big) \ \\% \ 7 $$

Where:
- $h$ is the day of the week (0 = Saturday, 1 = Sunday, ... &nbsp;)
- $q$ is the day of the month
- $m$ is the month (1 = January, 2 = February, ... &nbsp;)
- $j$ is the century
- $k$ is the year of the century

Write a program that prompts the user to enter the above values and display the name of the day of the week.
