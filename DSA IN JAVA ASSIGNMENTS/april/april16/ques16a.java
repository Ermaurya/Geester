package assim2;

public class ques16a {
    public static int findMaxRec(int A[], int n)
    {
     
      if(n == 1)
        return A[0];
         
        return Math.max(A[n-1], findMaxRec(A, n-1));
    }
    public static void main(String args[])
    {
        int A[] = { 3,5,7,1,0};
        int n = A.length;
        System.out.println(findMaxRec(A, n));
    }
}
    

