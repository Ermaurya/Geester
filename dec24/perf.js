var n =prompt("Enter the number");
var pr=0;
for(var i=1;i<=n/2;i++){
       if(n%i == 0) {
          pr=pr+i;
 } 
}
if (pr == n){
          console.log("perfect square");
        }else {
            console.log("not Perfect quare");
}

