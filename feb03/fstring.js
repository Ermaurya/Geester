
 var fString = function(s, indices) {
    var str = "";
    for ( var i = 0; i < indices.length ; i++) {
        str += s[indices[i]];
    }
    return str;
};

let s = "shubham ";
let arr = [1,2,3,0,2,1,3];
document.write(fString(s,arr));