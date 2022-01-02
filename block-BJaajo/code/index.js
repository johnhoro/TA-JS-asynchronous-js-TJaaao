setTimeout(() => {
  [1, 2, 3, 4, 5].forEach((num) => console.log(num));
}, 0);
console.log("First Call");
setTimeout(() => {
  [1, 2, 3, 4, 5].forEach((num) => console.log(num));
}, 0);
console.log("Last Call");

function asyncForEach(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i]);
  }
  //
}

asyncForEach([1, 2, 3], (num) => console.log(num));

console.log("one");

setTimeout(() => {
  console.log("two");
}, 0);
console.log("three");
