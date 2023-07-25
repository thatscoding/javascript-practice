// throttling - it is technique in which no matter how many times the user fire the event
//              ,the attached functin will be executed at once in a given time interval.

const getData = () => {
  console.log("fetching data");
  document.getElementById("btn").disabled = false;
};

const throttling = (fn, d) => {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    document.getElementById("btn").disabled = true;
    timer = setTimeout(() => {
      fn();
    }, d);
  };
};

const betterFunction = throttling(getData, 2000);

document.getElementById("btn").addEventListener("click", betterFunction);
