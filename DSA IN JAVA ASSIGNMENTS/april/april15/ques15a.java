package assim2;

public class ques15a {
    public static void main(String[] args) {
		int[][] arr = {{1,2,3},
			          {4,5,6},
			          {7,8,9}};
	    int m = arr.length;
	    int n = arr[0].length;
	     chang(arr,m,n);
	     System.out.println("Sawp");
	     swap(arr,m,n);
	     printMatrix(arr,m,n);

	}
	
	private static void chang(int[][] arr, int m, int n) {
		for(int i=0; i<m; i++) {
			for(int j=i; j<n; j++) {
				int temp = arr[i][j];
				arr[i][j] = arr[j][i];
				arr[j][i] = temp;
			}
		}
	}

	
	private static void swap(int[][] arr, int m, int n) {
		for(int i=0; i<m/2; i++) {
			for(int j=0; j<n; j++) {
				int temp = arr[i][j];
				arr[i][j] = arr[m-1-i][j];
				arr[m-1-i][j] = temp;
			}
		}
	}
	
    private static void printMatrix(int[][] arr, int m, int n) {
    	for(int i=0; i<m; i++) {
			for(int j=0; j<n; j++) {
				System.out.print(arr[i][j]+" ");
			}
			System.out.println();
    	}
	}

}
    

