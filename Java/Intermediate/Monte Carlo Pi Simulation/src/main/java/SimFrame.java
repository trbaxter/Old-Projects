import javax.swing.*;
import java.awt.*;

public class SimFrame extends JFrame {

    public SimFrame() {

        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setTitle("Monte Carlo Method of Approximating π");
        setSize(500,500);
        setResizable(false);
        setLayout(new GridLayout());
        setLocationRelativeTo(null);

        SimDrawing d = new SimDrawing();
        add(d);
        setVisible(true);
    }

}
