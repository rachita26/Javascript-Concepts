var arr = [{ n: 1 }, { n: 2 }, { n: 3 }, { n: 4 }, { n: 5 }];

let temp = [];
arr.forEach((el) => {
  temp.push(el.n * el.n);
});
console.log(temp);

let t = arr.map((el) => el.n * el.n);
console.log(t);

function missing(x, arr) {
  var flag = 0;
  arr.forEach((el) => {
    console.log("in for each");
    if (el.n == x) {
      flag = 1;
    }
  });
  if (flag) console.log("present");
  else console.log("missing");
}
missing(3, arr);
