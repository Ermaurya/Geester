package assim2;

public class ques13c {
    class Solution {
        public int findDuplicate(int[] nums) {
             int i = 0;
            while (i < nums.length) {
                int correct = nums[i] - 1;
                if (nums[i] != nums[correct]) swap(nums, i, correct);
                else if (nums[i] != i + 1) return nums[i];
                else i++;
            }
            return nums.length - 1;
        }
        private void swap(int[] arr, int a, int b) {
            int temp = arr[a];
            arr[a] = arr[b];
            arr[b] = temp;
        }
    }
    
}
