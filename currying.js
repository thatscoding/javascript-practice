function add(a) {
  return function add(b) {
    return function add(c) {
      return a + b + c;
    };
  };
}

console.log(add(7)(8)(2));

const res1 = add(7);
const res2 = res1(8);
const res3 = res2(2);
console.log(res3);

// infinite currying

function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}

console.log(add(7)(8)(9)(4)());
