/*
 * Function to test if a string is an operand
             * Arguments:
             *     str: the string to be tested
            */
export const isOperand = (str) => {
    return str === '+' || str === '-' || str === '*' || str === '/';
}

/*
 * Function to add or concatenate a number to the equation array.
 * Arguments:
 *     equation: an array for the equation
 *     value: the number to add to the array
 */
export const numberForEquation = (equation, value) => {
    if (equation.length === 0 || isOperand(equation.at(-1))) {
        equation.push(value);
    } else {
    // Otherwise concat the value to the last index
        equation[equation.length - 1] += value;
    }
    return equation;
}

/*
 * Function to add or concatenate an operand to the equation array.
 * Arguments:
 *     equation: an array for the equation
 *     value: the number to add to the array
 */
export const operandForEquation = (equation, value) => {
    // If the array is not empty
    if (equation.length > 0) {
        // If the final index of the array is an operand
        if (isOperand(equation.at(-1))) {
            // Replace the final value with a new operand
            equation[equation.length - 1] = value;
        } else {
            // Otherwise push the new value
            equation.push(value);
        }
        return equation;
    }
}
/*
 * Function to handle a generic button press of the calculator
 * Arguments:
 *     value: the value of the button being pressed
*/
export const equationBuilder = (equation, value) => {
    // If the value us a number
    if (!isNaN(value) && value !== ' ') {
        // If the array is empty or the last index is an operand,
        // simply push the value to the array.
        if (equation.length === 0 || isOperand(equation.at(-1))) {
            equation.push(value);
        } else {
            // Otherwise concat the value to the last index
            equation[equation.length - 1] += value;
        }
        // If the value is an operand
    } else if (isOperand(value)) {
        // If the array is not empty
        if (equation.length > 0) {
            // If the final index of the array is an operand
            if (isOperand(equation.at(-1))) {
                // Replace the final value with a new operand
                equation[equation.length - 1] = value;
            } else {
                // Otherwise push the new value
                equation.push(value);
            }
        }
    } else if (value == 'AC') {
        equation = [];
    }

    return equation;
}