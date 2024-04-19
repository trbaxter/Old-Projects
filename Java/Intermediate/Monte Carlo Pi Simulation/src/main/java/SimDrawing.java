import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class SimDrawing extends JPanel implements ActionListener {

    int x = 0;
    int y = 0;

    Timer t = new Timer(1, this);

    public SimDrawing() {
        t.start();
    }

    @Override
    public void actionPerformed(ActionEvent e) {

        int nThrows = 0;
        int nSuccesses = 0;

        int width = 500;
        int height = 500;

        for (int i = 0; i < (20000+1); i++){

            x = (int) (Math.random() * width);
            y = (int) (Math.random() * height);

            nThrows++;

            if (x*x + y*y <= width*height) {
                nSuccesses++;
            }
        }

        double estimate = 4*((double) nSuccesses / (double) nThrows);

        repaint();
    }

    public void paint(Graphics g) {

            Graphics2D g2d = (Graphics2D) g;

            g2d.setColor(Color.BLACK);
            g2d.setStroke(new BasicStroke(4));
            g2d.drawArc(-515,3,1000,1000,0,90);



            g.setColor(Color.RED);
            g.fillOval(x,y,5,5);



        }
    }
