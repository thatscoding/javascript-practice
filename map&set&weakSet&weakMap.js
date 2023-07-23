// Set & weakSet

// both should have unique data
// set -> can hold elements
// weak -> can hold object

// set -> set is used to store the unique values of particular type

const set = new Set([1, 1, 1, 2, 2, 3, 4, 5, 10, 1, 6]);

// set.add(50);

// set.forEach((item) => console.log(item));
// console.log(set.has(50));
// set.delete(50);
// console.log(set.has(50));

// weakset -> weakSet is used to store unique collection of object

const weakSet = new WeakSet();

// const obj1 = {};
// const obj2 = {};
// const obj3 = {};

// weakSet.add(obj1);
// weakSet.add(obj1);
// weakSet.add(obj1);
// weakSet.add(obj1);

// console.log(weakSet.has(obj1));
// weakSet.delete(obj1);
// console.log(weakSet.has(obj1));

// map -> can be used to store key-value pair of data, key should be unique

const map = new Map([
  ["apple", 100],
  ["banana", 200],
  ["apple", 200],
]);

// map.set("mongo", 300);

// map.forEach((key, value) => {
//   console.log(key, value);
// });

// map.delete("apple");

// map.forEach((key, value) => {
//   console.log(key, value);
// });

// weakMap -> used to store collection object , where object name treated as a key and placeholder treated a value

//

const weakMap = new WeakMap();

const obj1 = {};

weakMap.set(obj1, 1);
console.log(weakMap.get(obj1));
