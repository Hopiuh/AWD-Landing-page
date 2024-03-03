// Selecting all the buttons and the display element
const digits = document.querySelectorAll('.digit');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('#equals');
const clear = document.querySelector('#clear');
const backspace = document.querySelector('#backspace');
const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

// Adding event listener to each digit button
digits.forEach(button => {
    button.addEventListener('click', () => {
        display.textContent += button.textContent;
    });
});


operators.forEach(button => {
    button.addEventListener('click', () => {
        display.textContent += ` ${button.textContent} `;
    });
});


equals.addEventListener('click', () => {
    try {
        display.textContent = eval(display.textContent);
    } catch {
        display.textContent = "Error";
    }
});


clear.addEventListener('click', () => {
    display.textContent = '';
});


backspace.addEventListener('click', () => {
    display.textContent = display.textContent.slice(0, -1);
});


let degree = 90;

// Adding event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Increase the degree by 45 each time a button is clicked
        degree += 45;

        // Change the degree of the linear gradient
        document.body.style.background = `linear-gradient(${degree}deg, #435334, #CEDEBD)`;
    });
});