// Closures are created whenever a variable that is defined outside the current scope is accessed from within some inner scope. It gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created. To use a closure, simply define a function inside another function and expose it.

// Why is closure better than global variable?
//It's a scoping issue. Global variables are just that: Global, to everyone. With closures, the scope (visibility) of the variables can be better controlled, which means the possible unintended side effects can be better controlled.
//[Globals] are usually considered bad practice precisely because of their non-locality: a global variable can potentially be modified from anywhere (unless they reside in protected memory), and any part of the program may depend on it. A global variable therefore has an unlimited potential for creating mutual dependencies, and adding mutual dependencies increases complexity
//Race condition. If 2 instances are using the application at the same time, anyone can update the value. Closure will limit the availability.


var counter;
var invokeFunc;
function add() {
    var ct = 0;
    return function() {
        ct = ct + 1; 
        return ct;
    }
}
invokeFunc = add(); 
// invokeFunc is inner [Function] now. It invokes the add() function and stores the inner function retured from add()
for (var i = 0; i < 5; i++) {
    var counter = invokeFunc(); 
    //calling the inner function and storing returned value ct in counter
    //this way the ct in initialized only once and set to 0 initially
    //on further calling the inner function only the increment happens
}
console.log(counter);

