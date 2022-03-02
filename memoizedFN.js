// Memoizing/Caching

function memo(fn) {
  var cache = {};
  return function (...args) {
    const key = args.join("_");
    if (!cache[key]) {
      cache[key] = fn.apply(null, args);
    }
    return cache[key];
  };
}

function sum(a, b) {
  for (let i = 0; i <= 100000000; i++) {}
  return a + b;
}

const memoizedSum = memo(sum);

console.time("1st call");
console.log(memoizedSum(10, 20));
console.timeEnd("1st call");

console.time("2nd call");
console.log(memoizedSum(10, 20));
console.timeEnd("2nd call");
