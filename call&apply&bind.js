// Call() : call method allow us to use the methods of another object;
//  apply() : apply method is similar to the call methods. the only difference is that.
// apply methods take arguments as seperately. in the other hand apply mehtods take argument as array.

// bind (): bind methods return a new function. the value of this keyword is refers to the owner object. which we
// passed as argument.

var obj = {
  name: "demo",
  greeting: function (message) {
    return this.name + message;
  },
};

var person1 = { name: "rahul" };

console.log(
  obj.greeting.call(person1, " here, good morning , how can i help you")
);

// example 2 :
function greetings(message) {
  return this.name + message;
}

const n1 = { name: "soham" };

console.log(greetings.call(n1, " here, good morning , how may i help you"));

// apply ():

var obj2 = {
  name: "sovit",
  age: 20,
  getAge: function (n1, n2) {
    return this.name + n1 + n2;
  },
};

let person2 = { name: "rahul" };

// using call methods
console.log(obj2.getAge.call(person2, 20, 40));

// using apply methods
console.log(obj2.getAge.apply(person2, [200, 400]));

// bind mehtods
let newagefun = obj2.getAge.bind(person2, 200, 400);

console.log(newagefun());
