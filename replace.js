// <!-- Given an array of positive integers, perform the following operations in the specified order:
// Replace all occurrences of 1 with 2
// Replace all occurrences of 2 with 1
// Replace all occurrences of 3 with 4
// Replace all occurrences of 4 with 3
// … and so on -->

var arr = [2, 1, 2, 3, 5, 4, 1];

// [2, 2, 2, 3, 5, 4, 2][(1, 1, 1, 3, 5, 4, 1)][(1, 1, 1, 4, 5, 4, 1)][
//   (1, 1, 1, 3, 5, 3, 1)
// ][(1, 1, 1, 3, 6, 3, 1)][(1, 1, 1, 3, 5, 3, 1)];

function replace(arr) {
    const result =[];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result.push(arr[i] - 1)
    }
    else result.push(arr[i])
  }
  return result;
}

console.log(replace(arr))