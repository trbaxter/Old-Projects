import java.util.ArrayList;

public class DotComBust {

    private GameHelper helper = new GameHelper();
    private ArrayList<DotCom> dotComsList = new ArrayList<>();
    private int numOfGuesses = 0;

    private void setUpGame() {
        DotCom one = new DotCom();
        one.setName("MySpace.com");
        DotCom two = new DotCom();
        two.setName("eBay.com");
        DotCom three = new DotCom();
        three.setName("AskJeeves.com");

        dotComsList.add(one);
        dotComsList.add(two);
        dotComsList.add(three);

        System.out.println("\nYour goal is to sink three dot coms: MySpace.com, eBay.com, and AskJeeves.com.");
        System.out.println("Try to sink them all in the smallest number of guesses. Good luck!\n");

        for (DotCom dotComToSet : dotComsList) {
            ArrayList<String> newLocation = helper.placeDotCom(3);
            dotComToSet.setLocationCells(newLocation);
        }
    }

    private void startPlaying() {
        while (!dotComsList.isEmpty()) {
            String userGuess = helper.getUserInput("Enter a guess.");
            checkUserGuess(userGuess);
        }
        finishGame();
    }

    private void checkUserGuess(String userGuess) {
        numOfGuesses++;
        String result = "Miss!";

        for (DotCom dotComToTest : dotComsList) {
            result = dotComToTest.checkYourself(userGuess);
            if (result.equals("Hit!")) {
                break;
            }
            if (result.equals("DotCom destroyed!")) {
                dotComsList.remove(dotComToTest);
                break;
            }
        }
        System.out.println(result);
    }

    private void finishGame() {
        System.out.println("All the dot coms have been eliminated - game over!\n");
        if (numOfGuesses <= 18) {
            System.out.println("Your score is: " + numOfGuesses + " guesses.");
            System.out.println("Nice work!");
        } else {
            System.out.println("It took you " + numOfGuesses + " guesses.");
            System.out.println("Try a little harder next time.");
        }
    }

    public static void main(String[] args) {
        DotComBust game = new DotComBust();
        game.setUpGame();
        game.startPlaying();
    }

}
