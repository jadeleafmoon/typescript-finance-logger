"use strict";
// functions
let greet;
greet = () => {
    console.log("hi!");
};
const add = (a, b, c = 12) => {
    console.log(a + b);
    console.log("c", c);
};
add(5, 10);
