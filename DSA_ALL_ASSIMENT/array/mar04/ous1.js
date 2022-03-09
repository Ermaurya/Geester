/*
  @param {number[]} nums
  @return {void} Do not return anything, modify nums in-place instead.
 */
//https://leetcode.com/problems/sort-colors/"
 var sortColors = function (nums) {
    var swappe;
    do {
      swappe = false;
      for (var i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
          var temp = nums[i];
          nums[i] = nums[i + 1];
          nums[i + 1] = temp;
          swappe = true;
        }
      }
    } while (swappe);
  };