console.log("hello world");

// ways of making object in javascript

// const obj = new Object({
//   name: "ajay",
// });

// const obj1 = new Object();
// const obj2 = {
//   name: "aryan",
// };

// console.log(obj);

// example 2
const obj = new Object({
  name: "ajay",
  getName: function () {
    return this.name;
  },
  getRoll: function () {
    return this.roll;
  },
});

// console.log(obj);

const obj2 = {
  roll: 100,
  name: "vivek",

  __proto__: obj,
};

const obj3 = {
  class: "MCA",
  __proto__: obj2,
};

// console.log(obj2);
// console.log(obj2.name);
// console.log(obj2.getName());
// console.log(obj2.getRoll());

// console.log(obj3.getName());

// example 3

const arr = ["Ajay"];
arr.push("sachin");
console.log(arr);

const array = new Array();
console.log(array);

// example 3

// if you want toadd function or properties in stand prototype but you never change  standard
// prototype of array's properties and fuctions

Array.prototype.show = function () {
  return this;
};
const cities = ["delhi"];
console.log(cities);

// example 4
Array.prototype.convertIntoObj = function () {
  let newObj = {};
  this.forEach((item) => {
    newObj[item] = item;
  });
  return newObj;
};

console.log(cities.convertIntoObj());

//example 5

function myPrototype(name) {
  return (this.name = name);
}

myPrototype.prototype = obj3;

const myproto = new myPrototype("sachin");
console.log(myproto.getName());
