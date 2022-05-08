package assim5;


    class Solution {
        public int sumOfUnique(int[] nums) {
            int[] arr=new int[101];
            for(int i=0;i<nums.length;i++) {
                arr[nums[i]]++;
            }
            int count=0;
            for(int i=0;i<arr.length;i++) {
                if(arr[i]==1) {
                    count+=i;
                }
            }
            return count;
        }
    }
    

