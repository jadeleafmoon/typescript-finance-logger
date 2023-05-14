// explicit types
let character: string;
let age: number;
let isEven: boolean;

age = 10;
// age = 'ten';
isEven = true;

// arrays
let ninjas: string[] = [];
// ninjas.push(10);
// ninjas = ["yoshi", "mario"];

// Union Type
let mixed: (string|number)[] = [];
mixed.push('hello');
mixed.push(20);
// mixed.push(false);

let uid: (string|number);
uid = "one";
uid = 123;
// uid = false;

// Objects
let ninjaOne: object;
ninjaOne = { name: 'yoshi', age: 30 };
// ninja = "hello"
ninjaOne = []; // allowed! Gotcha

let ninjaTwo: {
  name: string,
  age: number,
  belt: string
};

ninjaTwo = { 
  name: "mario", 
  age: 20, 
  belt: "black"
};