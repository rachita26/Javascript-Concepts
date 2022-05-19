// arr.map((el, i, arr) => {}) => retrun []

Array.prototype.myMap = function (cb) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    const item = cb(this[i], i, this);
    result.push(item);
  }
  return result;
};

const arr = ["1", "2", "3", "4", "5"];

const callback = function (el) {
  return parseInt(el);
};

const result = arr.myMap(callback);

console.log(result);
