### Instance Variable Declarations
<br>  

**DECLARE** an _int array_ to hold the cell locations. Call it _locationCells_.  
**DECLARE** an _int_ to hold the number of hits. Call it _numOfHits_ and **SET** it to 0.
---
### Method Declarations
<br>

**DECLARE** a _checkYourself()_ method that takes a _String_ for the user's guess (i.e. "1"),  
checks it, and returns a result representing a "hit", "miss", or "kill".  
**DECLARE** a _setLocationCells()_ setter method that takes an _int array_,
which has the three cell locations as _ints_ (2,3,4, etc.).
---
### Method Logic
<br>

**METHOD:** _String checkYourself(String userGuess)_  
&nbsp; &nbsp; &nbsp; &nbsp; 
**GET** the user guess as a String parameter  
&nbsp; &nbsp; &nbsp; &nbsp; 
**CONVERT** the user guess to an _int_  
&nbsp; &nbsp; &nbsp; &nbsp; 
**REPEAT** with each of the location cells in the _int array_  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
**IF** the user guess matches:  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
**INCREMENT** the number of hits  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
**IF** the number of hits is 3, **RETURN** "kill" as the result  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
**ELSE** it was not a kill, so **RETURN** "hit"  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
END IF  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
**ELSE** the user guess did not match, so **RETURN** "miss"  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
END IF  
&nbsp; &nbsp; &nbsp; &nbsp; 
END REPEAT  
END METHOD  
<br>

**METHOD:** _void setLocationCells(int[] cellLocations)_  
&nbsp; &nbsp; &nbsp; &nbsp; 
**GET** the cell locations as an _int array_ parameter  
&nbsp; &nbsp; &nbsp; &nbsp; 
**ASSIGN** the cell locations parameter to the cell locations instance variable  
END METHOD

