/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}
function addNumbers(number1, number2) {
    let addNumber1 = parseInt(document.querySelector("#add1").value);
    let addNumber2 = parseInt(document.querySelector("#add2").value);
    document.querySelector("#sum").value = add(addNumber1, addNumber2);
    
}
document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
let subtract = function (number1, number2) {
    return number1 - number2;
}
let subtractNumbers = function (number1, number2) {
    let subtract1 = parseInt(document.querySelector("#subtract1").value);
    let subtract2 = parseInt(document.querySelector("#subtract2").value);
    document.querySelector("#difference").value = subtract(subtract1, subtract2);
}
document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */ 
let multiply = ((number1, number2) => number1 * number2);
let multiplyNumbers = () => {
    let factor1 = parseInt(document.querySelector("#factor1").value);
    let factor2 = parseInt(document.querySelector("#factor2").value);
    document.querySelector("#product").value = multiply(factor1, factor2);
};
document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
let divide = function (number1, number2) {
    return number1 / number2;
}
let divideNumbers = () => {
    let dividend = parseInt(document.querySelector("#dividend").value);
    let divisor = parseInt(document.querySelector("#divisor").value);
    document.querySelector("#quotient").value = divide(dividend, divisor);
}
document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);

// Using any combination of function declaration types, repeat the items in Step 2 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, divideNumbers, and quotient. 
/* Decision Structure */

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */