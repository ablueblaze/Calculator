let button = document.querySelectorAll("button");



// Using forEach is like putting a "onClick" function onto every number button.
button.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        if (event.target.className == 'number'){
            // Using Number() to grab the value and make it into... A NUMBER!!!
            console.log(Number(event.target.value));
        } else if (event.target.className == "operation"){
            console.log(event.target.value);
        }
    })
});



