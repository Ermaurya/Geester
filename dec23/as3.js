let n=prompt("Emter any number");
let p=0;
 {
   for(let i=2;i<n;i++)   
    if (n%i == 0)
     {
      p=p+1;
    
     }
   }  
     if(p==0){
     alert("number is prime");
     }else {
        alert("number is not prime");
     }
   