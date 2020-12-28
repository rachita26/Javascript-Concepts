function f1(x, callback) {
  console.log(x);
  callback();
}

function f2() {
  console.log("callback func");
}

f1(5, f2);
