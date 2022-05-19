const arr = [1, 2, 3, 4];
const arr1 = [3, 4, 5, 3];
function distinct(arr1, arr2) {
  let map = new Map();
  for (let i = 0; i < arr1.length; i++) {
    map.set(arr1[i], i);
  }
  for (let i = 0; i < arr2.length; i++) {
    if (!map.has(arr2[i])) return arr2[i];
  }

  return -1;
}

console.log(distinct(arr, arr1));
