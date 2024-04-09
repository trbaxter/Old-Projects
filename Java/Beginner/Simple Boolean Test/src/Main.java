import java.util.*;

public class Main {

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);  // Class that allows user input in the terminal.

        System.out.println();                    // Creates a blank line above the text requesting a number.
        System.out.println("Enter an integer. The program will return true if odd, and false if even.");
        int x = input.nextInt();                 // Takes the int input from the user.
        System.out.println(intTest(x));          // Displays the result of using intTest on x in the terminal.

    }

    public static boolean intTest(int x) {

        return x % 2 != 0;            // Returns true for odd x, false for even x.
    }
}
