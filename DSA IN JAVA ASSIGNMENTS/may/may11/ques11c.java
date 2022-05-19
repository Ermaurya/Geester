package assim6;

import java.util.Scanner;

//Count Alpha Special Digits 
public class ques11c {
        public static void main(String args[]){
           Scanner sc = new Scanner(System.in);
           String s = sc.nextLine();
           // String s = "12as%^y&";
            count(s);
       }
      static void count(String s){
            int dcount = 0,acount=0,scount=0;
            for(int i=0;i<s.length();i++){
                if(Character.isDigit(s.charAt(i))){
                    dcount++;
                }
                else if(Character.isLetter(s.charAt(i))){
                    acount++;
                }else{
                    scount++;
                }
            }
    
            System.out.println("alphabet : "+acount);
            System.out.println("digit : "+dcount);
            System.out.println("special "+scount);
        }
    }
       
    
    

