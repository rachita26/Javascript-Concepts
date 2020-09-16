//Pass by value - changing the value of the passed variable does not change the original value
function byValue(a) {
    a = 10;
    console.log(a);
}
var a = 5;
byValue(a);
console.log(a);

//Pass by reference - any change on the argument changes the original object
function byRef(obj) {
    obj.x = 10;
    console.log(obj);
}
var obj = { x: 5 };
byRef(obj);
console.log(obj);
