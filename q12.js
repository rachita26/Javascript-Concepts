// Write functions `add`, `multiply` and `incrementUpto` to make the following assertions pass, where
//
// `add` adds two numbers
// `multiply` multiplies two numbers
// `incrementUpto` keeps incrementing a given number until it reaches a maximum limit
 
const incrementerFn = incrementUpto(multiply(add(1, 2))(3))(12);
// console.log(multiply(3)(3));
//incrementUpto(9)(12)
 
console.assert(incrementerFn() === 10, "((1 + 2) * 3) + 1 === 10");
console.assert(incrementerFn() === 11, "(((1 + 2) * 3) + 1) + 1 === 11");
console.assert(incrementerFn() === 12, "((((1 + 2) * 3) + 1) + 1) + 1 === 12");
console.assert(incrementerFn() !== 13, "Max increment limit reached!");

function add(a,b){
  return a+b;
}

// multiply(a)(b)
function multiply(a){
  return function(b){
    return a*b;
  };
}

function incrementUpto(x){
  return function(max){
    return function(){
      return Math.min(++x, max)
    }
  }
}