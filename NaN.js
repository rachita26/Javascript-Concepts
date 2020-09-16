// Why is NaN == NaN -> false
//NaN is a short form of Not a Number. Since NaN always compares unequal to any number, including NaN, it is usually used to indicate an error condition for a function that should return a valid number. When a string or something else is being converted into a number and that cannot be done, then we get to see NaN.
// https://stackoverflow.com/questions/22600248/is-nan-falsy-why-nan-false-returns-false/22600338#:~:text=NaN%20is%20special%20in%20that,to%20nothing%2C%20not%20even%20NaN%20.&text=NaN%20is%20the%20same%20as,the%20expression%20evaluates%20to%20true%20.

console.log(typeof NaN); //number

console.log(NaN === NaN); //false
//In JavaScript, NaN has the distinction of being the only value that is not equal to itself
//Hence to check whether a number is valid or not use Object.is() or isNaN()

console.log(Object.is(NaN, NaN)); // true
//Since NaN is not a valid number

console.log(isNaN(NaN)); //true
//Since NaN is not a valid number

console.log(Object.is(NaN, 7)); //false
console.log(Object.is(NaN, "7")); //false

console.log(!NaN); //true
console.log(!NaN == !NaN); //true
console.log((!!NaN == !!NaN)); //ture
//Using ! coerces the argument to boolean using the abstract ToBoolean method, where !NaN converts to true and !!NaN converts to false

console.log(NaN == false); //false
// Coerces false from type boolean to type number(since typeof NaN is number) so false becomes 0, NaN == 0 -> false because 0 is a valid number.

