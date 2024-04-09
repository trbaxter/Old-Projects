public class Main {
    public static void main (String[] args) {

        String[] wordListOne = {"24/7", "multi-tier", "30,000 foot", "B-to-B", "win-win", "front-end", "web-based",
                "pervasive", "smart", "six-sigma", "critical-path", "dynamic"};

        String[] wordListTwo = {"empowered", "sticky", "value-added", "oriented", "centric", "distributed", "clustered",
        "branded", "outside-the-box", "positioned", "networked", "focused", "leveraged", "aligned", "targeted",
        "shared", "cooperative", "accelerated"};

        String[] wordListThree = {"process", "tipping-point", "solution", "architecture", "core competency", "strategy",
        "mindshare", "portal", "space", "vision", "paradigm", "mission"};


        int oneLength = wordListOne.length;
        int twoLength = wordListTwo.length;
        int threeLength = wordListThree.length;

        int rand1 = (int) (Math.random() * oneLength);
        int rand2 = (int) (Math.random() * twoLength);
        int rand3 = (int) (Math.random() * threeLength);

        /* Math.random() generates a decimal number 0 <= x < 1.
        The result is multiplied by the length of a list,
        and then to an integer via the cast.
        This allows us to randomly select a word out of the list.
         */

        String phrase = wordListOne[rand1] + " " + wordListTwo[rand2] + " " + wordListThree[rand3];

        System.out.println(" ");
        System.out.println(rand1);
        System.out.println(Math.random());
        System.out.println("What we need is a " + phrase + "!");
    }
}
