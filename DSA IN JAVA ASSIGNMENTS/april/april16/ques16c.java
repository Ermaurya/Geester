package assim2;

public class ques16c {
    static int revnum = 0;
    static int base = 1;
    static int reversDigits(int num)
    {
        if (num > 0) {
            reversDigits(num / 10);
            revnum += (num % 10) * base;
            base *= 10;
        }
        return revnum;
    }
    public static void main(String[] args)
    {
        int num = 12345;
        System.out.println(reversDigits(num));
    }
}
    

