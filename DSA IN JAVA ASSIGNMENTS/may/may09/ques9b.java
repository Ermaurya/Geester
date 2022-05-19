package assim6;

public class ques9b {
    
    static int maxSubArraySum(int a[], int size)
    {
    int max = a[0];
    int curr_max = a[0];
 
    for (int i = 1; i < size; i++)
    {
           curr_max = Math.max(a[i], curr_max+a[i]);
        max = Math.max(max, curr_max);
    }
    return max;
    }
    public static void main(String[] args)
    {
    int a[] = {-2, -3, 4, -1, -2, 1, 5, -3};
    int n = a.length;  
    int max_sum = maxSubArraySum(a, n);
    System.out.println("largest contiguous sum is "+ max_sum);
    }
}
 
    

