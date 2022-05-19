package assim6;

public class ques11d {
    static String remove(String s) {
        String r = "";
        for (int i = 0; i < s.length(); i++) {
            if (Character.isDigit(s.charAt(i)) || Character.isLowerCase(s.charAt(i))) {
                r = r + s.charAt(i);
            }
        }
        return r;
    }

    public static void main(String args[]) {
        String s = "Aste6%e#12(loP";
        System.out.println(remove(s));
    }

}
