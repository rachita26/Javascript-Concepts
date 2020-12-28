// function f1(x) {
//   console.log(x);
//   f2();
//   function f2() {
//     let a = 2;
//     console.log(a, x);
//   }
// }

// f1(5);

var add = (function outer() {
  var counter = 0;
  return function () {
    counter = counter + 1;
    console.log(counter);
  };
})();

add();
add();
add();
