import javax.swing.*;
import java.awt.*;
import java.util.Random;

public class MonteCarloApplication extends JPanel {




    public void paintComponent (Graphics g) {

        super.paintComponent(g);
        Graphics2D g2 = (Graphics2D) g;
        Dimension size = getSize();
        Insets insets = getInsets();
        int width = size.width - insets.left - insets.right;
        int height = size.height - insets.top - insets.bottom;
        Random r = new Random();

        for (int i = 0; i < 21000; i++){

            g2.setStroke(new BasicStroke(1.5F));
            g2.setColor(Color.blue);

            int x = Math.abs(r.nextInt()) % width;
            int y = Math.abs(r.nextInt()) % height;
            g2.drawLine(x, y, x, y);
        }

        g2.setStroke(new BasicStroke(6));
        g2.setPaint(Color.black);
        g.drawArc(-515,2,1000,1000,0,90);
    }


    public static void main(String[] args) {

        int i;                          // Initialization variable for upcoming calculations.
        int nThrows = 0;                // Counter for number of dart throws.
        int nSuccess = 0;               // Counter for number of throws that land within the square.

        double x,y;         // The x & y coordinates are doubles to reflect continuous displacement across the square.

        for (i = 0; i < 21001; i++) {

            x = Math.random();  // Assigns 0 <= x < 1.
            y = Math.random();  // Assigns 0 <= y < 1.

            nThrows++;        // For each dart, assign a random x & y coordinate , then increase the throw counter.

            if (x*x + y*y <= 1)     // If the position of the dart lands within the board, count a success.
                nSuccess++;
        }

        JFrame frame = new JFrame("Simulation Outcome");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.add(new MonteCarloApplication());
        frame.setSize(500,500);
        frame.setVisible(true);

        System.out.println("");
        System.out.println("π/4 = " + (double)nSuccess/(double)nThrows );
        System.out.println("π = " + 4*(double)nSuccess/(double)nThrows );

        // Results are type cast as double to show numerical precision as the number of darts thrown changes.

    }
}


