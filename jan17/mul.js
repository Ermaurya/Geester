var n  = parseInt(prompt("Enter a number"));
function fn(a,x,y){
   return[x(a),y(a)];
}
function mulBy4(x){
    return x * 4;
}
function add9(y){
    return y * 9;
}
var arr = fn(n,mulBy4,add9)
console.log(arr);
document.write("maniputlateArray function  is ",arr)