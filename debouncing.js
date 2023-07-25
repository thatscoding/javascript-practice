/// Debouncing - it is technique where we delay the execution of a function until
///              after a certain amount of time has passed.

const getData = () => {
  console.log("fetching data");
};

const debounce = (callback, d) => {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback();
    }, d);
  };
};

const betterFunction = debounce(getData, 2000);

document.getElementById("btn").addEventListener("click", betterFunction);
