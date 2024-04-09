import java.util.Scanner;

public class Email {

    private String firstName;
    private String lastName;
    private String password;
    private int defaultPasswordLength = 10;
    private String department;
    private String email;
    private int defaultMailboxCapacity = 500;
    private String alternateEmail;
    private String companySuffix = "company.com";


    public Email(String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.department = setDepartment();
        this.password = randomPassword(defaultPasswordLength);

        email = firstName.toLowerCase() + "." + lastName.toLowerCase() + "@" + department + companySuffix;
    }

    private String setDepartment() {
        System.out.println("DEPARTMENT CODES\n" +
                "1 for Sales\n" +
                "2 for Development\n" +
                "3 for Accounting\n" +
                "0 for None\n" + "\n" +
                "Enter department code: ");
        Scanner in = new Scanner(System.in);
        int deptChoice = in.nextInt();
        try {
            if (deptChoice == 1) {return "sales.";}
            else if (deptChoice == 2) {return "development.";}
            else if (deptChoice == 3) {return "accounting.";}
            else if (deptChoice > 4 || deptChoice < 0 ) throw new IllegalArgumentException();
        } catch (IllegalArgumentException e) {
            System.out.println("\nERROR: Only 0 through 4 are acceptable inputs. Please try again.");
            System.exit(0);
        } {return "";}
    }

    private String randomPassword(int length) {
        String passwordSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%";
        char[] password = new char[length];
        for (int i = 0; i < length; i++) {
            int rand = (int) (Math.random() * passwordSet.length());
            password[i] = passwordSet.charAt(rand);
        }
        return new String(password);
    }

    public void setDefaultMailboxCapacity(int newMailboxCapacity) {
        this.defaultMailboxCapacity = newMailboxCapacity;
    }

    public void setAlternateEmail(String altEmail) {
        this.alternateEmail = altEmail;
    }

    public void changePassword(String password) {
        this.password = password;
    }

    public int getMailboxCapacity() { return defaultMailboxCapacity;}
    public String getAlternateEmail() {return alternateEmail;}
    public String getPassword() {return password;}

    public String showInfo() {
        return "\nDISPLAY NAME: " + firstName + " " + lastName +
                "\nPASSWORD: " + password +
                "\nCOMPANY EMAIL: " + email +
                "\nMAILBOX CAPACITY: " + defaultMailboxCapacity + "mb";
    }

}
