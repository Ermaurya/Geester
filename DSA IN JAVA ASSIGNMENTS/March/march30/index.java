
class Solution {
        public int[] twoSum(int[] numbers, int target) {
            int f=0,l=numbers.length-1;
            int a[]=new int[2];
            while(f<l){
                if(numbers[f]+numbers[l]==target){
                    a[0]=f+1;a[1]=l+1;
                    break;
                }
                else if(numbers[f]+numbers[l]<target){
                    f++;
                }
                else{
                    l--;
                }
            }
            return a;
        }
    }
    
