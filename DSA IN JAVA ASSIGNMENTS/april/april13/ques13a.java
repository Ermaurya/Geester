package assim2;

public class ques13a {
    public static void maxelement(int rows, int[][] arr) {
        int i = 0;
        int max = 0;
        int[] result = new int[rows];
        while (i < rows) {
            for (int j = 0; j < arr[i].length; j++) {
                if (arr[i][j] > max) {
                    max = arr[i][j];
                }
            }
            result[i] = max;
            max =0;
            i++;
 
        }
        printArray(result);
 
    }
    private static void printArray(int[] result) {
        for (int i =0; i<result.length;i++) {
            System.out.println(result[i]);
        }
 
    }
 
  
    public static void main(String[] args) {
        int[][] arr = new int[][] { {2, 3, 4, 9},
                                    {1, 4, 9, 30},
                                    {86, 24, 21, 31},
                                   {22, 11, 24, 45} };
    
        maxelement(4, arr);
    }
}
    

