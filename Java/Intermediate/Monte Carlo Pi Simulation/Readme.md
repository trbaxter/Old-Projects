# Monte Carlo Pi Simulation

This is a program that estimates the value of π by using randomly plotted points.  
(Technically, these plots are not truly random but _pseudorandom_. An important distinction.)

The program starts by greeting the user with a title and a prompt to enter a number of points.  
A user may enter as many points as they want.

<img src="Pictures/MonteCarlo Sample Run 1.png" alt="">


Once the number of points are assigned, the program configures a GUI frame and engages the following process:

1.) Begin a Java swing timer.  
2.) Generate two random values within the display area of the GUI and create a coordinate (x,y).  
3.) Save the coordinate in an ArrayList.  
4.) Paint the point in the GUI using the last pair of coordinates in the ArrayList.

<img src="Pictures/MonteCarlo Sample Run 2.png" width="300" height="300" alt="">


Once all points have been painted, it then:  

5.) Goes through the ArrayList, one coordinate set at a time, and checks if it's found inside or outside the circle.  
6.) Generates an estimate of π with the following calculation:

$$ π = 4 \cdot \dfrac{Number of points inside the circle}{Total number of points} $$




## Design Diagram


```mermaid



flowchart LR
    
    %% Sim Start %%
    A((Start)):::start
    
    %% Sim End %% 
    Z((Finish)):::finish
    
    %% Sim Actions %%
    B[Get number\nof points\nto plot]:::action
    D[Plot\npoints]:::action
    E[Estimate π]:::action
    F[Display\nresults]:::action
    
    %% Sim Decisions %%
    C{Is input\nvalid?}:::decision

    
    %% Links %%
    A --> B
    B --> C
    C -- &nbsp No &nbsp --> B
    C -- &nbsp Yes &nbsp --> D
    D --> E
    E --> F
    F --> Z


    
    

    %% Class Colors %%
    classDef start stroke:#0f0,stroke-width:2px;
    classDef finish stroke:#f00, stroke-width:2px;
    classDef decision stroke:#cc5500, stroke-width:2px;
    classDef action stroke:#33FF, stroke-width:2px;
```

<br>


## Future Ideas for Improvement

### **Add text to JFrame indicating approximation value**
Rather than displaying the estimation result in the console, it would be cool to see the estimation change in real-time.  
This could be achieved by adding a text line in the JFrame window that updates every time repaint occurs.
(Maybe at the bottom?)

<br>

### **Add secondary JFrame showing xy plot**
Another great visual would be a secondary JFrame that plots the estimation value as the number of points increases.  
This would give the user a sense of how the number of points directly influences the estimation outcome.

<br>

### **Improve the GUI paint implementation**
Currently, when the first point is painted, it gets completely erased and doesn't persist in the plot.  
This requires the program to add an extra point onto the amount requested by the user and ignore the first element 
in the ArrayList.  
While it works, it isn't exactly ideal and could probably be configured better.

<br>

### **Add point progress timer**
When a user enters a _very large_ number of points, the GUI will fill out every point in the square long before
the simulation is finished.  
This could lead to a long wait without any indication to the user. Something like "Drawing point x / total points" 
that's updated in real-time would be nice. 