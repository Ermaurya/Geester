/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersection = function(nums1, nums2) {
    
    let hash = {}
    
    for(const num of nums1){
        hash[num] = true
    }
    
    let result = []
    for(let i = 0; i < nums2.length; i++){
        if(hash[nums2[i]]) {
            result.push(nums2[i])
        }
    }
    return [...new Set(result)]
};