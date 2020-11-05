var x = 1;
a(); //due to hoisting, the func defn. is brought up by JS even though the call is made before the defn.
//function a(){....} a();
b();
//function b(){....} b();
console.log(x);

function a() {
  console.log(x); // does not take up global x variable value
  var x = 10;
  //converted code due to variable hoisting
  //var x;
  //console.log(x);
  //x=10;
  //****Variable hoisting only happends on initializations and not declaration. Hence var x; is shifted up but not its initialization to 10****/
}

function b() {
  var x = 100;
  console.log(x);
}

// undefined
// 100
// 1
