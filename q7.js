function f(a) {
  //   return a == 3 ? 4 : a == 4 ? 3 : a;

  let m = { 3: 4, 4: 3 };
  return m[a];
}
console.log(f(4));
