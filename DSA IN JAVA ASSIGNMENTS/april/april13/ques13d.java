package assim2;

public class ques13d {
    static int findRpting(int[] arr, int n)
    {
      
        int sum = 0;
        for (int i = 0; i < n; i++)
            sum += arr[i];
        return sum - (((n - 1) * n) / 2);
    }
    public static void main(String args[])
    {
        int[] arr = { 1,3,4,2,2 };
        int n = arr.length;
        System.out.println(findRpting(arr, n));
    }
}
    

