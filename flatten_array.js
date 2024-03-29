const arr = [
  [1, 2],
  [3, 4],
  [5, 6, [7, 8]],
  [9, 10],
];

console.log("Array.flat", arr.flat(2)); //[12345678910]
//depth 2

console.log("Concat", [].concat(...arr)); //[123456[78]910]

function customFlat(arr, depth = 1) {
  let result = [];
  arr.forEach((ar) => {
    if (Array.isArray(ar) && depth > 0) {
      result.push(...customFlat(ar, depth - 1));
    } else result.push(ar);
  });
  return result;
}

console.log(customFlat(arr, 2));
