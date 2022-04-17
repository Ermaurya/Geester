package assim2;

public class ques12b {

    class Solution {
    public int searchInsert(int[] nums, int target) {
         for (int i = 0; i < nums.length; i++) {
            if(nums[i]>=target){
                return i;
            }
        }
        return nums.length;
    }
}
}
