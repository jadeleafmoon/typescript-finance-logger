// functions

let greet: Function;

greet = () => {
  console.log("hi!")
};

const add = (a: number, b: number, c?: number | string) => {
  console.log(a + b);
  console.log("c", c);
};

console.log("add will return, ", add(5, 10));

const minus = (a: number, b: number): number => {
  return a + b;
}

const multiply = (a: number, b: number) => {
  return a + b;
};

console.log("Multiply", multiply(4, 5));