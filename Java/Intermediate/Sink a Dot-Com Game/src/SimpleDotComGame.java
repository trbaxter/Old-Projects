public class SimpleDotComGame {

    public static void main(String[] args) {
        int numOfGuesses = 0;
        GameHelper helper = new GameHelper();

        SimpleDotCom theDotCom = new SimpleDotCom();
        int randomNum = (int) (Math.random() * 5);

        int[] locations = {randomNum, randomNum + 1, randomNum + 2};
        theDotCom.setLocationCells(locations);
        boolean isAlive = true;

        while (isAlive == true) {
            String guess = helper.getUserInput("Enter an integer between 0 and 6: ");
            String result = theDotCom.checkYourself(guess);
            numOfGuesses++;

            if (result.equals("DotCom destroyed!\n")) {
                isAlive = false;
                System.out.println("Game over! It took you " + numOfGuesses + " guesses to win the game.");
            }
        }
    }
}
