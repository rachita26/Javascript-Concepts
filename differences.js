//Local storage & Session Storage
//Local storage is used to reduce the data calls between the client and server. The data is stored in the local machine and can be removed manually through settings and programs.
//Session storage is available until the session of the page ends. It has an expiration time.

// What is the difference between the operators ‘==‘ & ‘===‘?
// == compares only the value and not the type
// === makes value + type check
console.log(9 == '9'); //true
console.log(9 === '9'); //false

//What is the difference between null & undefined?
//undefined is if a variable is declared but not assigned any value. It is treated as a datatype itself.
//null can be used as an assignment value for something you don't want to assign a value to. Type of null is object.
var a;
var b = null;
console.log(typeof a); //undefined
console.log(typeof b); //object

//What is the difference between undeclared & undefined?
//undeclared - variable used in a program but not declared, gives runtime error on reading it
//undefined - variable declared but not assigned a value, give undefined when tried to read fom a program

// console.log(x);  //ReferenceError: x is not defined
console.log(a); //undefined

// What is the difference between window & document in JavaScript?
//JavaScript window is a global object which holds variables, functions, history, location.
//The document also comes under the window and can be considered as the property of the window.

// innerText, innerHTML, textContent
// innerText returns: "This element has extra spacing and contains a span element."
// innerHTML returns: "   This element has extra spacing     and contains <span>a span element</span>."
// textContent returns: "   This element has extra spacing    and contains a span element."
// The innerText property returns just the text, without spacing and inner element tags.
// The innerHTML property returns the text, including all spacing and inner element tags.
// The textContent property returns the text with spacing, but without inner element tags.



