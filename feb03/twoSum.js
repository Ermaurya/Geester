let arr = [2,7,11,15];
let target = 9;

function twoSum(arr, target) {
   
    let array = [];
    for (let i = 0; i < arr.length; i++) {
        let diff = target - arr[i];
        
            for (let j= 1+i; j<arr.length; j++) {
            if ( arr[j] == diff)
            {   
                array.push(i);
                array.push(j);
                return array;
            }
        }
    }
    return 'target missmatch';
}

console.log(twoSum(arr,target));