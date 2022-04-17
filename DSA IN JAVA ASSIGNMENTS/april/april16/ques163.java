
package array;

public class hg {

    public static int countNegative(double[] numbers, int count){  
        if(count == numbers.length){  
             return 0;  
         }  
         int sum = countNegative(numbers, count + 1);  
         if(numbers[count] < 0){  
               sum++;  
         }  
         return sum;  
        }
         public static void main(String args[]){
            double a[]={1,2,-3,-4,5};  
            System.out.println(countNegative(a, 0));  
     }

}
