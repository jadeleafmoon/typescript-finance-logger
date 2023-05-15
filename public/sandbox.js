"use strict";
// functions
let greet;
greet = () => {
    console.log("hi!");
};
const add = (a, b, c) => {
    console.log(a + b);
    console.log("c", c);
};
console.log("add will return, ", add(5, 10));
const minus = (a, b) => {
    return a + b;
};
const multiply = (a, b) => {
    return a + b;
};
console.log("Multiply", multiply(4, 5));
