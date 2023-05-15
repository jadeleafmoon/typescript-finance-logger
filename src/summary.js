// Type Aliases

type StringOrNum = string | number;

type objWithName = { name: string, uid: StringOrNum };

const greet = (user: {name: string, uid: string | number}) => {
  console.log(`${user.name} says hello`);
};

const greet2 = (user: objWithName) => {
  console.log(`${user.name} says hello`);
};

// Function signatures ---------------

// example 1
// must return void
let greet: (a: string, b: string) => void;

greet = (name: string, greeting: string) => {
  console.log('${name} says ${greeting}');
}

// example 2
// must return a number
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
  if (action === "add") return numOne + numTwo;
  else return numOne - numTwo;
}

// example 3
let logDetails: (obj: {name: string, age: number}) => void;

type person = {name: string, age: number};

logDetails = (ninja: person) => {
  console.log(`${ninja.name} is ${ninja.age} years old`);
}

logDetails({name: "Mario", age: 20});