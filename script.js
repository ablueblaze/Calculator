
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
    return operation(firstNum, secondNum);
}

function hasId(element) {
    return typeof element.id != 'undefined';
}

// Utilizing querySelectorAll allows for the number variable to scoop up all of the numbers into one.
let number = document.querySelectorAll(".number");
let operation = document.querySelectorAll(".operation");



// Using forEach is like putting a "onClick" function onto every number button.
number.forEach((num) => {
    num.addEventListener("click", (event) => {
        // Using Number() to grab the value and make it into... A NUMBER!!!
        console.log(Number(event.target.value));
        
        if (event.target.id == 'undefined'){
            console.log("yep")
        } 
    })
});

operation.forEach((op) => {
    op.addEventListener("click", (event) => {
        console.log(event.target.id)

        if (event.target.id == 'undefined') {
            console.log("yep")
        } else {
            console.log("nope")
        }
    })
});

function display(number){
    let display = document.querySelector("#display")
    let num = document.createTextNode(number)
    display.appendChild(num);
}


display(5)
console.log("test");