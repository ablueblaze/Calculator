let button = document.querySelectorAll("button");
let workingNumA = '0';
let workingNumB = '0';
let oldWorkingOperator = '';
let workingOperator = '';
let newEquation = true;

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
    // tempString = workingNumA.toString();
    // workingNumA = tempString + '.';
}

function clear(){
    workingNumA = '0';
    oldWorkingOperator = '';
    workingOperator = '';
}

function equal(){
    if (newEquation){
        oldWorkingOperator = workingOperator;
        newEquation = false;
        return operate(workingNumA, workingNumB, workingOperator);
    } else {
        workingOperator = '';
        return operate(workingNumA, workingNumB, oldWorkingOperator);
    }
}

function multiDigit(workingNum){
    if (workingNum == '0') {
        return event.target.value;
    } else {
        return workingNum + '' + event.target.value;
    }
}

function whichOperation(newInput) {
    switch (workingOperator){
        case '':
            workingOperator = newInput;
            break;
        case 'equal':
            workingNumA = equal();
            display(workingNumA)
        case 'clear':
            clear();
        case 'decimal':
            break;
        case 'posNeg':
            break;
        case 'percent':
            break;
    }
}

function operate(firstNum, secondNum, operation){
    console.log(workingNumA);
    console.log(workingOperator);
    return this[operation](Number(firstNum), Number(secondNum));
}


// Utilizing querySelectorAll allows for the number variable to scoop up all of the numbers into one.

function display(number){
    let display = document.querySelector("#display")
    let num = number;
    display.firstChild.nodeValue = num;
}

function bigOperation(btnClass){
    if(btnClass == 'operation'){
        whichOperation(workingOperator, event.target.value);
    } else if (btnClass == 'number') {
        if (workingOperator == ''){
            workingNumA = multiDigit(workingNumA);
            display(workingNumA);
        } else if (workingNumA == "Sorry, we don't do that here."){
            workingNumA = multiDigit(workingNumA);
            display(workingNumA);
        } else if (workingOperator != ''){
            workingNumB = multiDigit(workingNumB);
            display(workingNumB);
        } else {
            display("Number Problem 001")
        }
    } else {
        display("Class problem 002")
    }
}

// Using forEach is like putting a "onClick" function onto every number button.
button.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        if (event.target.className == 'number'){
            // Using Number() to grab the value and make it into... A NUMBER!!!
            console.log(Number(event.target.value));
            bigOperation(event.target.className)
        } else if (event.target.className == "operation"){
            console.log(event.target.value);
            bigOperation(event.target.className);
        }
    })
});




display(workingNumA)
console.log("test");