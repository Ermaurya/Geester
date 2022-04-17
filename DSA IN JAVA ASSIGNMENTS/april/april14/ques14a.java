package assim2;

public class ques14a {
    public static int N = 4;
    static void diagonalBoundarySum(int arr[][]){
        int Sum = 0;   
        for (int i = 0; i < N; i++) {
     
            for (int j = 0; j < N; j++) {
     
            if (i == j || (i + j) == N - 1) {
                    Sum += arr[i][j];
                }
     
             else if (i == 0 || j == 0 || i == N - 1|| j == N - 1) {
                    Sum += arr[i][j];
                }
            }
        }
        System.out.println(Sum);
    }
    public static void main(String args[])
    {
        
        int arr[][] = { { 1, 2, 3, 4 },
                        { 1, 2, 3, 4 },
                        { 1, 2, 3, 4 },
                        { 1, 2, 3, 4 } };
     
        diagonalBoundarySum(arr);
         
    }
}
    

