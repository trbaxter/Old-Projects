### Instance Variable Declarations
<br>  

`DECLARE` an _int array_ to hold the cell locations. Call it _locationCells_.

`DECLARE` an _int_ to hold the number of hits. Call it _numOfHits_ and **SET** it to 0.

---
### Method Declarations
<br>

`DECLARE` a _checkYourself()_ method that takes a _String_ for the user's guess and checks it,
returning "Hit!", "Miss!", or "DotCom destroyed!".

`DECLARE` a _setLocationCells()_ setter method that takes an _int array_,
which has the three cell locations as _ints_ (2,3,4, etc.).

---
### Method Logic
<br>

**METHOD:** _String checkYourself(String userGuess)_  
&nbsp; &nbsp; &nbsp; &nbsp;
`GET` the user guess as a String parameter.  
&nbsp; &nbsp; &nbsp; &nbsp;
`CONVERT` the user guess to an _int_.  
&nbsp; &nbsp; &nbsp; &nbsp;
`REPEAT` with each of the location cells in the _int array_.

&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
`IF` the user guess matches:  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
`INCREMENT` the number of hits.

&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
`IF` the number of hits is 3,  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
`RETURN` "DotCom destroyed!" as the result.   
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
`ELSE` if the DotCom was not destroyed,  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
`RETURN` "Hit!"  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
`END IF`

&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
`ELSE` if the user guess did not match,  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
`RETURN` "Miss!"  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
`END IF`

&nbsp; &nbsp; &nbsp; &nbsp;
`END REPEAT`  
`END METHOD`  
<br>

**METHOD:** _void setLocationCells(int[] cellLocations)_  
&nbsp; &nbsp; &nbsp; &nbsp;
`GET` the cell locations as an _int array_ parameter.  
&nbsp; &nbsp; &nbsp; &nbsp;
`ASSIGN` the cell locations parameter to the cell locations instance variable.  
`END METHOD`

