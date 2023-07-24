const calculateSum = (n) => {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
};
let cache = {};

const momoized = (callback) => {
  return (...args) => {
    // console.log("n", n);
    let n = args[0];
    console.log(n in cache);
    if (n in cache) {
      console.log("cached value");
      return cache[n];
    } else {
      console.log("calculate new value");
      let res = callback(n);
      cache[n] = res;
      //   console.log(cache);
      return res;
    }
  };
};

console.time();
console.log("ordinary method");
console.log(calculateSum(1000));
console.timeEnd();

console.log("**************************************");

var momoizedfun = momoized(calculateSum);
console.log("calculate first time");

console.time();
console.log(momoizedfun(1000));
console.timeEnd();

console.log("**************************************");

console.time();
console.log(momoizedfun(1000));
console.timeEnd();

console.log("**************************************");

console.time();
console.log(momoizedfun(2000));
console.timeEnd();

console.log("**************************************");

console.time();
console.log(momoizedfun(2000));
console.timeEnd();

console.log(cache);
