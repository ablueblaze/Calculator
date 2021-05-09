
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
    if (b == 0){
        return "Sorry, we don't do that here."
    } else {
        return a / b;
    }
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
    console.log(workingNum);
    console.log(workingOperator);
    return this[operation](Number(firstNum), Number(secondNum));
}


// Utilizing querySelectorAll allows for the number variable to scoop up all of the numbers into one.
let button = document.querySelectorAll("button");
let workingNum = '';
let workingOperator = '';

function display(number){
    let display = document.querySelector("#display")
    let num = number;
    display.firstChild.nodeValue = num;
}

function heldVariables(btnClass){
    if(btnClass == 'operation'){
        workingOperator = event.target.value;
    } else {
        if (workingOperator == ''){
            workingNum = Number(event.target.value);
        } else if (workingNum == "Sorry, we don't do that here."){
            workingNum = Number(event.target.value);
        } else if (workingOperator != ''){
            workingNum = operate(workingNum, event.target.value, workingOperator);
            workingOperator = '';
        }
    }
}

// Using forEach is like putting a "onClick" function onto every number button.
button.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        if (event.target.className == 'number'){
            // Using Number() to grab the value and make it into... A NUMBER!!!
            console.log(Number(event.target.value));
            heldVariables(event.target.className)
            display(workingNum)
        } else if (event.target.className == "operation"){
            console.log(event.target.value);
            heldVariables(event.target.className);
            workingOperator = event.target.value
        }
    })
});




display(workingNum)
console.log("test");