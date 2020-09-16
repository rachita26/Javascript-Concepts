//JavaScript variable arguments represents the arguments that are passed to a function. Using typeof operator, we can get the type of arguments passed to a function
function func(x){
console.log(typeof x, arguments.length);
}
func(); //==> "undefined", 0
func(7); //==> "number", 1
func("1", "2", "3");//==> "string", 3
