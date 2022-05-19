package assim6;

import java.util.Scanner;

public class ques11a {
    static int product(String s){
        int m = 1;
        for(int i=0;i<s.length();i++){
            if(Character.isDigit(s.charAt(i))){
                 int x = Character.getNumericValue(s.charAt(i));
                 m = m*x;
            }
        }

        return m;
    }

     public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
       String s = sc.next();
        //  String s = "as13r52e1u2";
         System.out.println(product(s));
     }
}
