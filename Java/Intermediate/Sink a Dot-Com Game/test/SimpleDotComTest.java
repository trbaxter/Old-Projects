public class SimpleDotComTest {
    public static void main(String[] args) {
        SimpleDotCom dotCom = new SimpleDotCom();
        int[] locations = {2,3,4};
        dotCom.setLocationCells(locations);

        String userGuess = "5";
        String result = dotCom.checkYourself(userGuess);
        String testResult = "failed";

        if (result.equals("hit")) {
            testResult = "passed";
        }

        // TODO: Create an if statement that checks for duplicate guesses, don't want those showing hits

        System.out.println(testResult);     // #5

    }
}
