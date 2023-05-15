// variables
let age: number;
age = 10;

// arrays
let arr: number[] = [];
arr.push(10);

let names: string[];
names = [];
names.push("bob");

// objects

let ninja: {
  age: number, 
  belt: string,
  skills: string[]
};

ninja = {
  age: 10,
  belt: "black",
  skills: ["punch", "kick"]
};

ninja["skills"].push("jump");

const myAdd = (a: number, b: number): string => {
  let result: string = "zero";
  result = `${a} ${b}`;
  return result;
}
