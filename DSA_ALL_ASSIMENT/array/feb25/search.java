public class search {
    public static int binarySearch(int[] nums, int target, boolean searchFirst)
    {
       
        int left = 0;
        int right = nums.length - 1;      
        int result = -1;
 
       
        while (left <= right)
        {
            int mid = (left + right) / 2;

            if (target == nums[mid])
            {
                result = mid;
 
                if (searchFirst) {
                    right = mid - 1;
                }
                
                else {
                    left = mid + 1;
                }
            }
 
            else if (target < nums[mid]) {
                right = mid - 1;
            }
           
            else {
                left = mid + 1;
            }
        }
        return result;
    }
 
    public static void main(String[] args)
    {
        int[] nums = {1,1,2,2,4,5,5,6,6,6,6,9,10,11};
        int target = 6;
 
       
        int first = binarySearch(nums, target, true);
 
       
        int last = binarySearch(nums, target, false);
 
        int count = last - first + 1;
 
        if (first != -1) {
            System.out.println("Element " + target + " occurs " + count + " times");
        }
        else {
            System.out.println("Element not found in the array");
        }
    }
}
    

