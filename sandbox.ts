//any type
let age: any = 25;
age = true;
age = 'ten';

let mixed: any[] = [];

mixed.push(23);
mixed.push(false);

let ninja: {
  name: any,
  age: any
};

ninja = {
  name: true,
  age: 'ten'
};

console.log(ninja);