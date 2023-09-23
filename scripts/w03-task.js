/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}
function addNumbers(addNumber1, addNumber2) {
    let parseInt(addNumber1) = document.querySelector("#add1").value;
    let parseInt(addNumber2) = document.querySelector("#add2").value;
    document.querySelector("#sum").value = add(addNumber1, addNumber2);
}
document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
let subtract = function (number1, number2) {
    return number1 - number2;
}
function subtractNumbers (subtract1, subtract2) {
    let subtract1 = document.querySelector("#subtract1").value;
    let subtract2 = document.querySelector("#subtract2").value;
    document.querySelector("#difference").value = subtract(subtract1, subtract2);
}
document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
let multiply = ((number1, number2) => number1 * number2);
function divideNumbers (factor1, factor2) {
    let factor1 = document.querySelector("#factor1").value;
    let factor2 = document.querySelector("#factor2").value;
    document.querySelector("#product").value = divideNumbers(factor1, factor2);
}
document.querySelector("#multiplyNumbers").addEventListener("click", divideNumbers);

/* Open Function Use - Divide Numbers */
function divide(number1, number2) {
    return number1 / number2 ;
}
function divideNumbers(divident, divisor) {
    let divident = document.querySelector("#divident").value;
    let divisor = document.querySelector("#divisor").value;
    document.querySelector("#quotient").value = divide(divident, divisor);
}
document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
