// Write JavaScript here
// 5x5 matrix
// last row 12345
//2nd last row 10 9 8 7 6
//21 22 23 24 25 a
//16 17 18 19 20 d
//11 12 13 14 15 a
//10  9  8  7  6 d
// 1  2  3  4  5 - asc

const print = (n) => {
  var ct = n * n;
  var orderToggle = n % 2 === 0 ? "descending" : "ascending";
  var arr = [];
  for (let i = 0; i < n; i++) {
    arr = [];
    for (let j = 0; j < n; j++) {
      // console.log(ct)
      arr.push(ct);
      ct -= 1;
    }
    if (orderToggle === "ascending") {
      console.log(arr.reverse().join( ));
    } else {
      console.log(arr.join( ));
    }
    orderToggle = orderToggle === "ascending" ? "descending" : "ascending";
  }
};

print(4);
