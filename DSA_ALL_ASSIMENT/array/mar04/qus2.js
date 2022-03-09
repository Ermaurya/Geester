/*
 * @param {number[]} nums
 * @return {number[]}
 */
//https://leetcode.com/problems/sort-an-array/
 var sortArray = function(nums) {
    return nums.sort(function(a,b){
        return a - b;
    });
};