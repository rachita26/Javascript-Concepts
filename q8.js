console.log(x); // undef
var x = 1;

//f=undef
f();

var f = function () {
  console.log("hi");
};

var f = function () {
  console.log("hi");
};
f();

function a(data) {
  console.log("a");
}

var x = () => {
  console.log("a");
};

var p = (data) => {
  console.log("a");
};
