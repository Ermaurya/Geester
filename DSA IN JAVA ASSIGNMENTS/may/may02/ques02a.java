package assim5;

import java.util.Arrays;

// Second Minimum Element in array
public class ques02a {

        static int findMin(int arr[]){
            int min = Integer.MAX_VALUE;
            for(int i=0;i<arr.length;i++){
                if(min>arr[i]){
                    min = arr[i];
                }
            }
    
            int second_min = Integer.MAX_VALUE;
            for(int i=0;i<arr.length;i++){
                if(second_min>arr[i] && arr[i]!=min){
                    second_min = arr[i];
                }
            }
            return second_min;
        }
    
        static int sort(int arr[]){
            Arrays.sort(arr);
            return arr[1];
        }
        public static void main(String args[]){
            int arr[] = {4,9,8,12,3,4,18};
            int min1 = findMin(arr);
            int min2 = sort(arr);
            System.out.println(min1);
            System.out.println(min2);
        }
    }
    
