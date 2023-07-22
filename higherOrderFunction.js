let companies = [
  { name: "Amazon", category: "Product Based", start: 1908, end: 2008 },
  { name: "Google", category: "Product Based", start: 1901, end: 2001 },
  { name: "Paytm", category: "Product Based", start: 1905, end: 2005 },
  { name: "Mindtree", category: "Service Based", start: 1903, end: 2003 },
  { name: "accenture", category: "Service Based", start: 1904, end: 2004 },
];

let ages = [10, 20, 80, 90, 30, 40, 60, 70, 5];

// Higher order functions :-
// functions that operates other functions , either by taking
// them as a argument or by returning them , called higher order function
// higher order functions are a result of function being first-class-citizens in javascript.

// for()
// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

// forEach()
// companies.forEach(function (item, index) {
//   console.log(index, item);
// });

// // using arrow function
// companies.forEach((item, index) => console.log(index + " => " + item.name));

// Map()

// const res = companies.map(function (item, index) {
//   return item.name + " => " + index;
// });
// console.log(res);

// using arrow function

// const res = companies.map((item, index) => item);
// console.log(res);

// filter

// const res = companies.filter((item) => item.category == "Service Based");
// console.log(res);

// const res = companies.filter(function (item, index) {
//   if (item.category == "Product Based") {
//     return 1;
//   }
// });
// console.log(res);

// const res = ages.filter((item) => item >= 50);
// console.log(res);

// const res = ages.filter(function (item) {
//   if (item >= 40) {
//     return 1;
//   }
// });

// console.log(res);

// reduce()

// const res = ages.reduce((total, item) => total + item, 0);
// console.log(res);

// const res = ages.reduce(function (total, item) {
//   return total + item;
// }, 0);
// console.log(res);

// sort()

// const res = companies.sort(function (a, b) {
//   if (a.start > b.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });
// console.log(res);

// const res = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
// console.log(res);

// const res = ages.sort((a, b) => b - a);
// console.log(res);
