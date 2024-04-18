import javax.swing.*;
import java.awt.*;

public class SimulationFrame extends JFrame {

    public SimulationFrame() {

        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setTitle("Monte Carlo Method of Approximating π");
        setSize(500,500);
        setResizable(false);
        setLayout(new GridLayout());
        setLocationRelativeTo(null);

        SimulationDrawing d = new SimulationDrawing();
        add(d);
        setVisible(true);
    }

}
