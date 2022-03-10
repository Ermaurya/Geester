

import java.util.Scanner;

public class onlyeven {
    static int even(int num1, int num2)
	{
		   if(num1>num2)
		    return 0;
		   System.out.print(num1+" ");
           return even(num1+2,num2);
		}
		public static void main(String[] args) {
           Scanner crs=new Scanner(System.in);
		    int num1=2,num2;
		    System.out.print("Enter your Limit:");
		    num2=crs.nextInt();
		    System.out.print("All Even number given range are:");
		    even(num1,num2);
	        crs.close();
		}
    
}
