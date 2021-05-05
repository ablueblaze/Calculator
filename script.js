
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
let button = document.querySelectorAll("button");



// Using forEach is like putting a "onClick" function onto every number button.
button.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        if (event.target.className == 'number'){
            // Using Number() to grab the value and make it into... A NUMBER!!!
            console.log(Number(event.target.value));
        } else if (event.target.className == "operation"){
            console.log(event.target.id);
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