let arr = [2,7,11,15,14,5,9,6];
let target = 19;
va=document.getElementById('value')
let vale=document.getElementById("clc").addEventListener
('click',fun);
function fun(){

for(let i = 0 ; i < arr.length ; i++){
    for (let j = i + 1; j <= arr.length - 1; j++){
        if(target == arr[i] + arr[j]){
            
            va.innerHTML=(` sum of indexes is ${[i,j]}`)
        }
    }
}
}