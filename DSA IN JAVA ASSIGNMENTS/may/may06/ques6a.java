package assim5;

public class ques6a {
    static String convert(int num) {

        StringBuilder temp = new StringBuilder();
        while (num != 0) {
            int rem = num % 16;
            char c;
            if (rem < 10) {
                c = (char) (rem + 48);
            } else {
                c = (char) (rem + 87);
            }
            temp.append(c);
            num = num / 16;
        }

        return temp.toString();
    }

    static String enString(String S, int N) {

        StringBuilder ans = new StringBuilder();

        for (int i = 0; i < N; i++) {

            char ch = S.charAt(i);
            int count = 0;
            String hex;

            while (i < N && S.charAt(i) == ch) {

                count++;
                i++;
            }
            i--;
            hex = convert(count);

            ans.append(ch);
            ans.append(hex);
        }
        ans.reverse();
        return ans.toString();
    }

    public static void main(String[] args) {
        String S = "aaaaaaaaaaa";
        int N = S.length();

        System.out.println(enString(S, N));
    }
}
