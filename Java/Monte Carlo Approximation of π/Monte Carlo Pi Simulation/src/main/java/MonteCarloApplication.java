public class MonteCarloApplication {

    public static void main(String[] args) {

        int i;                          // Initialization variable for upcoming calculations.
        int nThrows = 0;                // Counter for number of dart throws.
        int nSuccess = 0;               // Counter for number of throws that land within the square.

        double x,y;         // The x & y coordinates are doubles to reflect continuous displacement across the square.

        for (i = 0; i < 1000; i++) {

            x = Math.random();
            y = Math.random();

            nThrows++;        // For each dart, assign a random x & y coordinate, then increase the throw counter.

            if (x*x + y*y <= 1)     // If the position of the dart lands within the board, count a success.
                nSuccess++;
        }

        System.out.println("");
        System.out.println("π/4 = " + (double)nSuccess/(double)nThrows );
        System.out.println("π = " + 4*(double)nSuccess/(double)nThrows );

        // Results are type cast as double to show numerical precision as the number of darts thrown changes.

    }
}


