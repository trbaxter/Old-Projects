import java.util.Objects;
import java.util.Scanner;

public class UserInput {

    private long numPoints = 0;
    private short plotSpeed = 0;
    private String verification;


    public long getPoints() {return numPoints;}
    public short getPlotSpeed() {return plotSpeed;}
    public String getVerification() {return verification;}


    public long setPoints() {
        System.out.print("Enter the number of points to be plotted using a positive integer between 1 and 100,000: ");


        try {
            Scanner scanner = new Scanner(System.in);
            numPoints = scanner.nextLong();

            if (numPoints < 0) {
                System.out.println("\nNumber of points must be a positive integer. Please try again.\n");
                setPoints();
            }

            if (numPoints == 0) {
                System.out.println("\nCan't generate a plot using zero points! Please try again.\n");
                setPoints();
            }

            if (numPoints > 100000) {
                System.out.println("\nNumber of points is too large. Please try again.\n");
                setPoints();
            }

        } catch (Exception e) {
            System.out.println("Exception: " + e);
        }
        return numPoints;
    }

    public short setPlotSpeed() {
        System.out.print("\nSelect a plotting animation speed from the choices below:");
        System.out.println("\n0 -- Slow\n1 -- Medium\n2 -- Fast\n3 -- Very Fast");

        try{
            Scanner scanner = new Scanner(System.in);
            plotSpeed = scanner.nextShort();

            if (plotSpeed == 0) {plotSpeed = 100;}
            else if (plotSpeed == 2) {plotSpeed = 50;}
            else if (plotSpeed == 3) {plotSpeed = 10;}
            else {plotSpeed = 1;}

        } catch (Exception e) {
            System.out.println("Exception: " + e);
        }
        return plotSpeed;
    }

    public boolean setVerification(long numPoints, short plotSpeed) {

        if (numPoints > 50000 && (plotSpeed == 100 || plotSpeed == 50)) {
            System.out.println("This combination of points and animation speed will result in long completion time.");
            System.out.println("Are you sure? (Y to continue, N to re-enter choices.)");

            try {
                Scanner scanner = new Scanner(System.in);
                verification = scanner.nextLine();
                verification.toLowerCase();

                if (Objects.equals(verification, "n")) {
                    System.out.println("\nProcess aborted.\n");
                    return false;
                }

                else if (!Objects.equals(verification, "n") && !Objects.equals(verification, "y")) {
                    System.out.println("\nVerification input not recognized. Please try again.");
                    setVerification(numPoints, plotSpeed);
                    return false;
                }

            } catch (Exception e) {
                System.out.println("Exception: " + e);
            }
        }
        return true;
    }
}
