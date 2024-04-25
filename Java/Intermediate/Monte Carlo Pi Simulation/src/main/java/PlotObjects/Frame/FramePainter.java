package PlotObjects.Frame;

import PlotObjects.Border.BlackBorder;
import PlotObjects.PlotPoint.CreatePoint;
import PlotObjects.PlotPoint.PointHelper;
import PlotObjects.PlotPoint.PointPainter;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.math.RoundingMode;
import java.text.DecimalFormat;

public class FramePainter extends JPanel implements ActionListener {


    int count = 0;
    private static int points;

    Timer t = new Timer(1, this);
    BlackBorder blackBorder = new BlackBorder();
    PointPainter pointPainter = new PointPainter();
    PointHelper pointHelper = new PointHelper();


    public static void setPoints(int numPoints) {
        points = numPoints;
    }


    public FramePainter() {
        t.start();
    }

    public void actionPerformed(ActionEvent e) {

        if (count == points) {
            repaint();
            t.stop();
            int inner = pointHelper.pointChecker(pointPainter.getPointCoordinates());
            int outer = (points-1) - (inner);
            int total = inner+outer;

            double estimate = 4*((double) inner / (double) (total));
            DecimalFormat df = new DecimalFormat("#.#######");
            String formattedEstimate = df.format(estimate);

            System.out.println("\nPoints inside the circle: " + inner);
            System.out.println("Points outside the circle: " + outer);
            System.out.println("\nApproximation for pi: " + formattedEstimate);
        }

        if (count < points) {
            CreatePoint newPoint = new CreatePoint();
            pointPainter.storePointCoordinates(newPoint);


            repaint();
            count++;
        }
    }


public void paintComponent(Graphics g) {

    if (t.isRunning()) {
        blackBorder.paintBorder(g);
        pointPainter.paintPoint(g);
    }
}
}
