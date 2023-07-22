const arr = [10, 20, 30, 40, 50, 33, 45, 6, 7, 23, 22, 89, 32];
let newArr = arr.sort(function (a, b) {
  return a - b;
});

newArr.map((item) => console.log(item));

const binarySearch = (key) => {
  let s = 0;
  let e = arr.length - 1;
  while (s <= e) {
    let mid = Math.floor((s + e) / 2);
    // console.log(mid);
    if (arr[mid] == key) {
      return mid;
    } else if (arr[mid] < key) {
      s = mid + 1;
    } else {
      e = mid - 1;
    }
  }
  return -1;
};

let res = binarySearch(20);
if (res == -1) {
  console.log("data not found");
} else {
  console.log(`${arr[res]} found at pos ${res}`);
}

// db.collection.aggregate([{$unwind:"$logs"},{$group:{types:"${logs.types}"})
// db.colllection.distinct("logs.types")
