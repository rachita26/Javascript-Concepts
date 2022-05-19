var arr = [1, 2, 3, 4, 5];

function pushToArr(p) {
  if (!arr.length) {
    arr.push(p);
  } else {
    let x = arr.pop();
    pushToArr(p);
    arr.push(x);
  }
}

function reverse() {
  if (arr.length) {
    let p = arr.pop();
    reverse();
    pushToArr(p);
  }
}

reverse();
console.log(arr);
