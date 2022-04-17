package assim2;

public class oues11b {
    
    class Solution {
        int MissingNumber(int array[], int n) {
            // Your Code Her
           int miss=0;
           
           miss = (n*(n+1))/2; 
           
           for(int i=0;i<n-1;i++)
           {
             miss=miss-array[i];
             
           }
           return miss;
       
        }
    }
}
