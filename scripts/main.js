import { equationBuilder, isOperand, numberForEquation, operandForEquation, parseEquation } from './calculator.js';

const buttonPressed = (equation, value) => {
    // If the value is a number
    if (!isNaN(value) && value !== ' ') {
        return numberForEquation(equation, value);
    // If the value is an operand
    } else if (isOperand(value)) {
        return operandForEquation(equation, value);
    } else if (value === '=') {
        return parseEquation(equation);
    } else if (value === 'AC') {
        return [];
    }
}

const main = () => {
    // Grab the input that will show the equation and answer
    const output = document.getElementById('output');

    // Use a CSS querySelector to get all the buttons inside the buttons-container
    const buttons = document.querySelectorAll('#buttons-container button');

    // An array to contain each button that is pressed
    let equation = [];

    // Loop through each button and add an click listener
    buttons.forEach(btn => {
        btn.addEventListener('click', (event) => {
            equation = buttonPressed(equation, event.target.textContent);
            // Push the value into the output for the user to see
            if (equation.length != 0) {
                output.value = equation.join(' ')
            } else {
                output.value = '0';
            }
        });
    })
}



main();