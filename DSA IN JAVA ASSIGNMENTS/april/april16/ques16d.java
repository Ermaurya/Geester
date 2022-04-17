package assim2;

public class ques16d {

     static int arr[] = { 1, 2, 3, 4, 5, 6 };
 
    static int findSum(int A[], int N)
    {
        if (N <= 0)
            return 0;
        return (findSum(A, N - 1) + A[N - 1]);
    }
    public static void main(String[] args)
    {
        System.out.println(findSum(arr, arr.length));
    }
}

