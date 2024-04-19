public class Main {

    private void setTitle() {
        Title title = new Title();
        title.displayTitle();
    }

    private void setupSimulation() {
        UserInput input = new UserInput();
        boolean startupSuccess = false;
        while (!startupSuccess == true) {
            input.setPoints();
            input.setPlotSpeed();
            if (input.setVerification(input.getPoints(), input.getPlotSpeed())) {
                runSimulation();
                System.out.println("Points: " + input.getPoints());
                System.out.println("Speed: " + input.getPlotSpeed());
                System.out.println("Verified? " + input.getVerification());
                break;
            }
        }
    }

    private void runSimulation() {
        SimFrame frame = new SimFrame();
        SimDrawing drawing = new SimDrawing();

    }


    public static void main(String[] args) {
        Main simulation = new Main();
        simulation.setTitle();
        simulation.setupSimulation();
    }
}
