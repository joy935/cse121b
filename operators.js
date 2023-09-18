const x = 1;
const y = 2;

// Add two numbers
let a = x + y;
console.log(a);

// Multiply two numbers
a = x * y;
console.log(a);

// Subtract one from a number
a = x - y;
console.log(a);

// concatinate two strings together.
const b = "Good ";
const c = "morning";
console.log(b+c);

// assign a value to a variable
a = 10;
console.log(a);

// increment the value in a variable by 3
let d = 0;
for (let i = 0; i < 5; i++) {
    d += 3;
    console.log(d);
}

// compare two values to see if they are the same
if (x == y) {
    console.log("x and y are the same")
}
else {
    console.log("x and y are not same")
}

// check to see if one number is less than another number
if (x < y) {
    console.log("x is less than y")
}
else if (x > y) {
    console.log("x is larger than y")
}

// Check to see if two values are NOT equal
if (x != y) {
    console.log("x is not equal to y")
}
else {
    console.log("x and y are equal")
}

// check to see if a value is less than 10 and greater than 0
if (x < 10 && x > 0) {
    console.log("0 < x < 10")
}
else {
    console.log("x is not less than 10 and greater than 0")
}
