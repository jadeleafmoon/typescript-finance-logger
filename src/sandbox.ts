// Type Aliases

type StringOrNum = string | number;

type objWithName = { name: string, uid: StringOrNum };

const greet = (user: {name: string, uid: string | number}) => {
  console.log(`${user.name} says hello`);
};

const greet2 = (user: objWithName) => {
  console.log(`${user.name} says hello`);
};