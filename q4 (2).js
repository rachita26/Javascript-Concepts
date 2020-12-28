// function f(obj) {
//   let t = obj.a;
//   obj.a = obj.b;
//   obj.b = t;
//   return obj;
// }
// var obj = { a: 1, b: 2 };
// let o = f(obj);
// console.log(o.a, o.b);

let a = 1,
  b = 2;
[a, b] = [b, a];
console.log(a, b);
