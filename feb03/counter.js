var count = document.getElementById('count');
var dec = document.getElementById('decre');
var inc = document.getElementById('incre');

let n = 0;
let increase;
let decrease;

incre.addEventListener('click', function(){
    clearInterval(decrease);
    increase = setInterval(function(){
        n++;
        count.innerText = n;
    }, 1000);
})

decre.addEventListener('click', function(){
    clearInterval(increase);
    decrease = setInterval(function(){
        n--;
        count.innerText = n;
    }, 1000);
})