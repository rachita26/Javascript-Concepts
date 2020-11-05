const n = 10;
const result = (function () {
  delete n; //delete works on an object; here n is primitive data type, so no delete happens and no error too
  //delete has no effect on variables and functions
  return n;
})();
console.log(result);
