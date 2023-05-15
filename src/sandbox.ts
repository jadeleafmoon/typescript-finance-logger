// functions

let greet: Function;

greet = () => {
  console.log("hi!")
};

const add = (a: number, b: number, c: number | string = 12) => {
  console.log(a + b);
  console.log("c", c);
};

add(5, 10);

const minus = (a: number, b: number): number => {
  return a + b;
}