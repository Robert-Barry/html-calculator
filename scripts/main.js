import { equationBuilder, isOperand, numberForEquation, operandForEquation } from './calculator.js';

const buttonPressed = (equation, value) => {
    // If the value is a number
    if (!isNaN(value) && value !== ' ') {
        return numberForEquation(equation, value);
    // If the value is an operand
    } else if (isOperand(value)) {
        return operandForEquation(equation, value);
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
                output.value = '';
            }
        });
    })
}

            
/*
 * A function to evaluate the input to the calculator
 * and outputs an answer.
*/
const equalsPressed = () => {
    // Create a new array to contain the equation
    let fullEquation = [];
    let j = 0; // Used to build a number
    // Loop through the values in the equation array
    for (let i = 0; i < equation.length; i++) {
    // If the value is a number, appened it onto a string
        if (!isNaN(equation[i])) {
            if (!fullEquation[j]) {
                fullEquation[j] = ''; // Ensures the first valeu isn't undefined
            }
            fullEquation[j] += equation[i];
        } else {
            // If the value is not a number, create a new index for the fullEquation array
            j++;
            fullEquation[j] = equation[i];
            j++;
        }
    }
    console.log(fullEquation);
}

main();