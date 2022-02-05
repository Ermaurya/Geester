let arr = ['*',3,4,5];

function addorMul(arr) {
    if (arr[0] ==='*'){
    
    mul(arr);
    }
    else{
        add(arr);
    }



function add(num) {
    let res = 0;
    for (let i = 1; i < num.length; i++ ) {
        res = res + num[i];
    }
    document.write(`result of addition= ${res}`);
}

function mul(num) {
    let res = 1;
    for (let i = 1; i < num.length; i++ ) {
        res = res * num[i];
    }
    console.log(res)
    document.write(`result of multiplication= ${res}`);
}

}
addorMul(arr);