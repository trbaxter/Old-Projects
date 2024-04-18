# Battleship - The Classic Strategy Guessing Game

### **Goal:**
Sink all the computer's battleships in the fewest number of guesses.  
At the end, the player receives a rating based on performance.  
<br>

### **Setup:**
When the program is launched, the computer places three battleships on a virtual
7x7 grid. Each battleship takes up three cells.  
When that's complete, the game asks the player for the first guess.  
<br>

### **How to play:**
The computer will prompt the player for a guess that will be entered into
the console as "A3", "a5", etc.  
In response to the guess, the player will see a result in the console
indicating "Hit", "Miss", or "Battleship destroyed!".

When the player destroys every computer battleship, the game ends and displays the user's score.
<br>
<br>

## Visualization

An example game would have the following layout on the virtual grid:

<img src="Pictures/Battleship Grid.png"/>

Ship locations are randomly generated using the _placeBattleship()_ method found in the GameHelper class.

<br>

## Design Diagram


```mermaid



flowchart LR
    
    %% Game Start %%
    A((Start)):::start
    
    %% Game End %% 
    H((Finish)):::finish
    
    %% Game Actions %%
    B[Set up\n game]:::action
    C[Get user\n guess]:::action
    E[Remove\n cell]:::action
    F[Remove\n Battleship]:::action
    G[Display\n user score]:::action
    
    %% Game Decisions %%
    D{Check\n user\n guess}:::decision
    F1{Do any\n battleships\n remain?}:::decision
    
    %% Links %%
    A --> B  
    B --> C
    C --> D
    D -- &nbsp <b>Miss!</b> &nbsp ---> C
    D -- &nbsp <b>Hit!</b> &nbsp ---> E
    E --> C
    D -- &nbsp <b>Battleship destroyed!</b> &nbsp ---> F
    F --> F1
    F1 -- &nbsp <b>Yes</b> &nbsp --> C
    F1 -- &nbsp <b>No</b> &nbsp --> G
    G --> H((Finish)):::finish

    %% Class Colors %%
    classDef start stroke:#0f0,stroke-width:2px;
    classDef finish stroke:#f00, stroke-width:2px;
    classDef decision stroke:#cc5500, stroke-width:2px;
    classDef action stroke:#33FF, stroke-width:2px;
```

<br>

## Example Game

The application begins with a title screen and game instructions for the user:


<img src="Pictures/Battleship Sample Run 1.png"/>

<br>

Guesses are progressively entered until the player destroys the total number of ships
(default of 3) and wins the game:

<img src="Pictures/Battleship Sample Run 2.png"/>

<br>

If a player enters a guess located outside the grid, or containing illegal characters, 
the following warning will display:

<img src="Pictures/Battleship Sample Run 3.png"/>

<br>

## Future Ideas for Improvement

### **Addition of a GUI**  
While the game functions as expected, it can be a little difficult for a user to keep track of all of their guesses.  
It would be great to include a graphic interface allowing players to pick their guessing locations and have previous 
guesses tracked visually.  
<br>

### **Prevent guessing the same location twice**
Currently, a player can accidentally (or mistakenly) enter the same location multiple times when guessing.  
Adding a preventative measure that avoids counting these previous guesses would improve the player experience. 

