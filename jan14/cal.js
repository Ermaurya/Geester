var number1 = "";
var number2 = "";
var operator = "";

function setOperator(new_operator) {
    operator = new_operator;
}

function concatNumber(single_digit) {
    if(operator == "") {
        number1 = number1 + single_digit;
        display(number1);
    } else {
        number2 = number2 + single_digit;
        display(number2);
    }
   
}
 //////////////start operator//////////

function del() {
    if(operator == "") {
        number1 = number1.slice(0, -1);
        display(number1);
    } else {
        number2 = number2.slice(0, -1);
        display(number2);
    }
    
}
     

function clearAll() {
    if(operator == "") {
        number1 = "";
        display(number1);
    } else {
        number2 = "";
        display(number2);
    }  
}
function equals() {
    if(operator == "+") {
        number1 = Add(number1, number2);
        number2 = "";
        operator = "";
        display(number1);
    } else if(operator == "*") {
        number1 = Mult(number1, number2);
        number2 = "";
        operator = "";
        display(number1);
    }
    else if(operator=="-")
    {
        number1 = sub(number1, number2);
        number2 = "";
        operator = "";
        display(number1);
    }
    else if(operator=="/")
    {
        number1 = divide(number1, number2);
        number2 = "";
        operator = "";
        display(number1);
    }
}
//////////////end operator//////////
//////////////start operation//////////

function divide(number1,number2){
    number1 = parseInt(number1);
    number2 = parseInt(number2);
    var div=number1/number2;
    return div;
}
function sub(number1,number2){
    number1 = parseInt(number1);
    number2 = parseInt(number2);
    var sub=number1-number2;
    return sub;
}
function Add(number1, number2) {
    number1 = parseInt(number1);
    number2 = parseInt(number2);
    var sum = number1 + number2; 
    return sum;
}

function Mult(number1, number2){
number1 = parseInt(number1);
number2 = parseInt(number2);
    return number1 * number2;
}

function display(value) {
    var para = document.getElementById('value');
    para.innerText = value;
}
//////////////End operation//////////