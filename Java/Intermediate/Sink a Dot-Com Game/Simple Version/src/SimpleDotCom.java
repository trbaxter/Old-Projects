public class SimpleDotCom {

    int[] locationCells;
    int numOfHits = 0;

    public void setLocationCells(int[] locs) {
        locationCells = locs;
    }

    public String checkYourself(String stringGuess){
        int guess = Integer.parseInt(stringGuess);
        String result = "Miss!\n";
        for (int cell : locationCells) {
            if (guess == cell) {
                result = "Hit!\n";
                numOfHits++;
                break;
            }
        }

        if (numOfHits == locationCells.length) {
            result = "DotCom destroyed!\n";
        }
        System.out.println(result);
        return result;
    }

}
