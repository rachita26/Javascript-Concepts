var x = 5;
function scope() {
  var x = 3;
  console.log(x);
}
scope();
console.log(x);
