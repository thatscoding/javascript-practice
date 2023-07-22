// Rest & Spread Operator
// Rest -> combine into one variable
// spread -> break up into seperate variable
// segregate -> thodna (break)

const addNumber = (...rest) => {
  console.log(rest);
  const [a, b, c] = rest; //  array destructuring
  console.log(a + b + c);
};

addNumber(1, 2, 3, 4, 5, 6);

// spread
var names = ["sachin", "ajay", "soham"];

const getName = (name1, name2, name3) => {
  console.log(name1, name2, name3);
};

getName(...names);
getName(names);

const obj = {
  name: "sachin",
  age: 23,
  hobbies: ["observation", "play games"],
};

const obje2 = {
  ...obj, //
  age: 24,
  id: 1,
};

console.log(obj);
console.log(obje2);

// example 2
const person = {
  name: "sachin",
  age: 23,
  skills: ["c++", "javascript", "html", "css", "react"],
};

const getPserson = ({ ...rest }) => {
  console.log(rest);
};

getPserson({ ...person });
