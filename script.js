
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

function multiDigit(workingNum){
    if (workingNum == '0') {
        workingNum = event.target.value;
    } else {
        workingNum = workingNum.toString() + event.target.value;
    }
}

function operate(firstNum, secondNum, operation){
    console.log(workingNumA);
    console.log(workingOperator);
    return this[operation](Number(firstNum), Number(secondNum));
}


// Utilizing querySelectorAll allows for the number variable to scoop up all of the numbers into one.
let button = document.querySelectorAll("button");
let workingNumA = '0';
let workingNumB = '0';
let oldWorkingOperator = '';
let workingOperator = '';

function display(number){
    let display = document.querySelector("#display")
    let num = number;
    display.firstChild.nodeValue = num;
}

function bigOperation(btnClass){
    if(btnClass == 'operation'){
        if (event.target.value == 'equals') {
            workingNumA = operate(workingNumA, workingNumA, oldWorkingOperator);
            workingOperator = '';
            display(workingNumA);
        } else if (event.target.value == 'clear') {
            workingNumA = '0';
            oldWorkingOperator = '';
            workingOperator = '';
            display(workingNumA);
        // } else if (event.target.value == 'decimal') {
            // tempString = workingNumA.toString();
            // workingNumA = tempString + '.';
        } else {
            workingOperator = event.target.value;
        }
    } else if (btnClass == 'number') {
        if (workingOperator == ''){
            multiDigit(workingNumA);
        } else if (workingNumA == "Sorry, we don't do that here."){
            workingNumA = Number(event.target.value);
        } else if (workingOperator != ''){
            workingNumA = operate(workingNumA, event.target.value, workingOperator);
            oldWorkingOperator = workingOperator;
            workingOperator = '';
        }
    } else {
        console.log("Still working on it.")
    }
}

// Using forEach is like putting a "onClick" function onto every number button.
button.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        if (event.target.className == 'number'){
            // Using Number() to grab the value and make it into... A NUMBER!!!
            console.log(Number(event.target.value));
            bigOperation(event.target.className)
            display(workingNumA)
        } else if (event.target.className == "operation"){
            console.log(event.target.value);
            bigOperation(event.target.className);
        }
    })
});




display(workingNumA)
console.log("test");