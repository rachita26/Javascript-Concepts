// IIFE - Immediately Invoking Function Expression
//An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.
// It is a self invoking function. At the time of interpretation itself this function is invoked.

// (function () {
//     statements
// })();

//simple IIFE
var displayName = (function(){
var name = "ABC";
return name;
})();
console.log(displayName);

//IIFE for closures
var add = (function () {
    var ct = 0;
    return function () { ct += 1; return ct; }
})();
//self invoked therefore does not to need to be invoked separately to execute the innser function. ex-var c=add()
for (var i = 0; i < 5; i++)
    console.log(add());