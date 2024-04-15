### Method Logic
<br>

`METHOD`_public static void main(String[] args)_  
&nbsp; &nbsp; &nbsp; &nbsp; 
`DECLARE` an int variable to hold the number of user guesses, named _numOfGuesses_, set to 0.  
&nbsp; &nbsp; &nbsp; &nbsp; 
`MAKE` a new DotCom class.  
&nbsp; &nbsp; &nbsp; &nbsp; 
`COMPUTE` a random number between 0 and 4 that will be the starting location cell position.  
&nbsp; &nbsp; &nbsp; &nbsp; 
`MAKE` an int array with 3 ints using the randomly-generated number, the number + 1, and the number +2.  
&nbsp; &nbsp; &nbsp; &nbsp;
`INVOKE` the setLocationCells() method on the DotCom instance.  
&nbsp; &nbsp; &nbsp; &nbsp;
`DECLARE`  a boolean variable representing the state of the game, named _isAlive_.  
&nbsp; &nbsp; &nbsp; &nbsp;
`SET` it to true.  
<br>
&nbsp; &nbsp; &nbsp; &nbsp;
`WHILE` the dot come is still alive (_isAlive_ == true):  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
`GET` user input from the command line,  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
`INVOKE` the _checkYourself()_ method on the DotCom instance, and  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
`INCREMENT` the numOfGuesses variable. 
  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
`IF` result is "DotCom destroyed!"  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
`SET` _isAlive_ to false, and  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
`PRINT` the number of user guesses.  
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
`END IF`
  
&nbsp; &nbsp; &nbsp; &nbsp;
`END WHILE`  
`END METHOD`



