let n=prompt("Emter any number");
let x=true;
 {
   for(let i=2;i<n;i++)   
    if (n%i == 0)
     {
      x=false;
    break;
     }
   }  
     if(x==true){
     alert("number is prime");
     }else {
        alert("number is not prime");
     }
   