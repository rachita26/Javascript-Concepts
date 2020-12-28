// if([]) console.log("hi");
// if([] == true) console.log("helo");

// const arr = [1,2,3];
// arr.length = 0;
// console.log(arr);

// console.log((0.1 + 0.2) === 0.3);

// var x = 20;
// var y = "40";
// console.log(x + y); //2040
// console.log(x - y); //-20

function value(x){

}

function ref(obj){
obj.a=2
}

var x =10;
var obj = {a:1}
value(x);//10
ref(obj)
log(obj.a)//2