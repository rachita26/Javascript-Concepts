// A callback is a function that is to be executed after another function has finished executing — hence the name ‘call back’.
//Steps written after callback will not be executed, unlike async await. The callback is executed after the 1st function has executed completely. Async await comes back and executes the remaining steps.
// More complexly put: In JavaScript, functions are objects. Because of this, functions can take functions as arguments, and can be returned by other functions. Functions that do this are called higher-order functions. Any function that is passed as an argument is called a callback function.


function first(x, callback) {
    console.log(x);
    callback();
}
first('hi',function(){
    console.log('callback hi');
})


function first2(x, callback) {
    console.log(x);
    callback();
    console.log("hiiii"); //not executed after callback completion, as first2 is considered to be complete
}
function second2(){
    console.log('callback hi2');
}
// function third2(){
//     console.log('callback hi3');
// }
first('hi2',second2);