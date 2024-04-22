package PlotObjects.PlotPoint;

public class CreatePoint {
    private int x = setRandomX();
    private int y = setRandomY();

    private int setRandomX() {
        x = 75 + (int) (Math.random() * (451));
        return x;
    }

    private int setRandomY() {
        y = 75 + (int) (Math.random() * (451));
        return y;
    }

    public int getXPoint(){
        return x;
    }

    public int getYPoint(){
        return y;
    }

    // 75 is minimum x & y value in plot window
    // 525 is maximum
    // 451 is the range => max - min + 1


}
