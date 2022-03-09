public class sear {
    
        public static int search(int arr[], int x) {
            int n = arr.length;
            for (int i = 0; i < n; i++) {
                if (arr[i] == x)
                    return i;
            }
            return -1;
        }
    
        // Driver code
        public static void main(String[] args) {
            int arr[] = {'a','b','d','e','f','g','h','i','x','z'};
            int x = 'z';
    
            // Function call
            int result = search(arr, x);
            if (result == -1)
                System.out.print("Element is not present in array");
            else
                System.out.print("Element is present at index "
                        + result);
        }
    }
    

