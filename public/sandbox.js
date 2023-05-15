"use strict";
// Function signatures
// let greet: Function;
// example 1
// must return void
let greet;
greet = (name, greeting) => {
    console.log('${name} says ${greeting}');
};
// example 2
// must return a number
let calc;
calc = (numOne, numTwo, action) => {
    if (action === "add")
        return numOne + numTwo;
    else
        return numOne - numTwo;
};
// example 3
let logDetails;
logDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
    return 10;
};
logDetails({ name: "Mario", age: 20 });
