let firstName = 'Antonia';
let lastName = 'Francesca';

// Write a function declaration/definition
function fullName(first, last) {
    return `${first} ${last}`;
}

// Use and anonymous function expression
const fullName = function(first, last) { 
    return `${first} ${last}`
};

// Use an arrow function expression
const fullName = (firstName, lastName) => `${first} ${last}`;

// Write an expression that calls for the fullName function declaration and writes the result to an existing HTML element's text node with the ID of fullName
document.querySelector('#fullName').innerHTML = fullName(firstName, lastName);