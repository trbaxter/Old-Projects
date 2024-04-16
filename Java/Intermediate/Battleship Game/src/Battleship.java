import java.util.ArrayList;

public class Battleship {
    private ArrayList<String> locationCells;
    private String name;

    public void setLocationCells(ArrayList<String> loc) {
        locationCells = loc;
    }

    public void setName(String n) {
        name = n;
    }

    public String checkYourself(String userInput) {
        String result = "Miss!";
        int index = locationCells.indexOf(userInput);
        // Find out if the userGuess is in the array by asking for index. If not, then indexOf() returns -1.
        if (index >= 0) {
            locationCells.remove(index);

            if (locationCells.isEmpty()) {
                result = "Battleship destroyed!";
                System.out.println("Hit! You sunk an enemy " + name + ".");
            } else {
                result = "Hit!";
            }
        }
        return result;
    }
}
