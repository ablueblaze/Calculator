
function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function percent(){

}

function posNeg(){

}

function decimal(){

}

function clear(){

}

function equal(){

}

function operate(firstNum, secondNum, operation){
    return this[operation](Number(firstNum), Number(secondNum));
}


// Utilizing querySelectorAll allows for the number variable to scoop up all of the numbers into one.
let button = document.querySelectorAll("button");
let holdNum = '0';
let holdOperator = '';

function display(number){
    let display = document.querySelector("#display")
    let num = number;
    display.firstChild.nodeValue = num;
}

function heldVariables(btnClass){
    switch (btnClass){
        case "number" :
            if (holdNum == '0'){
                holdNum = event.target.value;
            } else{
                holdNum = operate(holdNum, event.target.value, holdOperator);
            }
        case "operation" :
            holdOperator = event.target.value;
    }
    

}

// Using forEach is like putting a "onClick" function onto every number button.
button.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        if (event.target.className == 'number'){
            // Using Number() to grab the value and make it into... A NUMBER!!!
            console.log(Number(event.target.value));
            heldVariables(event.target.className)
            display(holdNum)
        } else if (event.target.className == "operation"){
            console.log(event.target.value);
            holdOperator = event.target.value
        }
    })
});




display(holdNum)
console.log("test");