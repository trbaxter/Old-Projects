import java.util.InputMismatchException;
import java.util.Scanner;

public class UserInput {

    private int numPoints;


    public int getPoints() {
        return numPoints;
    }



    public void setPoints() {
        System.out.print("Enter the number of points to be plotted using a positive integer between 1 and 99,999: ");


        try {
            Scanner scanner = new Scanner(System.in);
            numPoints = scanner.nextInt();
            numPoints = numPoints+1;

            if (numPoints < 0) {
                System.out.println("\nNumber of points must be a positive integer. Please try again.\n");
                setPoints();
            } else if (numPoints == 0) {
                System.out.println("\nCan't generate a plot using zero points! Please try again.\n");
                setPoints();
            } else if (numPoints > 100000) {
                System.out.println("\nNumber of points is too large. Please try again.\n");
                setPoints();
            }

        } catch (InputMismatchException e) {
            System.out.println("\nThe number of points must be an integer between 1 and 99,999. Please try again.\n");
            setPoints();
        }
    }
}
