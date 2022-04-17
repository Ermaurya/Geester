package assim2;

public class ques16c {
   public static void main(String[] args) {
		int num = 12345;
		printReverse(num);
	}

	private static void printReverse(int num) {
		if(num < 10) {
			System.out.print(num);
			return;
		}
		else {
			System.out.print(num%10);
			printReverse(num/10);
		}
		
	}
}
    

