        var dv = document.getElementById('display');
        co=true
        function Countdown( duration, display){
          var timer = duration, minutes, seconds;
          var interVal = setInterval(function(){
            minutes = parseInt(timer/60, 10);
            seconds = parseInt(timer % 60, 10);
            
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            
            display.innerHTML = "<b>" + minutes + "m : " + seconds + "s" + "</b>";
            
            if(timer > 0){
              --timer;
              
            }
            else{
              clearInterval(interVal);
            } 
          }, 1000);
          
          var div = document.getElementById("pros");
            function pro(){
             var width = 1;
             var loading = setInterval(frame, 1000)
             function frame(){
               if(width >= 302){
                 clearInterval(loading);
               }else{
                 width++;
                 div.style.width = width + "px";
             
               }
           }
          }
          pro();         
 }
//  Countdown(dv);
 var star=document.querySelector('.start').addEventListener('click',function start(){
  Countdown(300, dv);
  pro()
 })
 var rest= document.querySelector('.reset').addEventListener('click',function(){
   period.innerText = 'Session cleared';
   minutes = minutes < 10 ? "0" + minutes : minutes;
   seconds = seconds < 10 ? "0" + seconds : seconds;
   
   display.innerHTML = "<b>" + minutes + "m : " + seconds + "s" + "</b>";
   
     
  
 })
 var pos=document.querySelector('.posed').addEventListener('click',function pose(){
   
 })