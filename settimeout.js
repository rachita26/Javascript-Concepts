function cal(n) {
  let r = 0;
  for (let i = 0; i < n; i++) {
    setTimeout(function () {
      r = 10;
      console.log("100 timeout " + r);
    }, 100);
    setTimeout(function () {
      r = r + i;
      console.log("r+i 150 timeout " + r + " " + i);
    }, 150);
    setTimeout(function () {
      console.log(r);
    }, 500);
  }
}
cal(5);
// 20 20 20 20 20
//for executes 5 times and sets final value of i to 5
//meanwhile setTimeout keeps all calls in stack for callback
//when the execute, they take up the latest value of i => 5

// 100 timeout 10
// 100 timeout 10
// 100 timeout 10
// 100 timeout 10
// 100 timeout 10
// r+i 150 timeout 10 0
// r+i 150 timeout 11 1
// r+i 150 timeout 13 2
// r+i 150 timeout 16 3
// r+i 150 timeout 20 4
// 20
// 20
// 20
// 20
// 20
