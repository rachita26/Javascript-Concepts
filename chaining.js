// Method chaining

const calc = {
  total: 0,
  add(a) {
    this.total = this.total + a;
    return this;
  },
  multiply(a) {
    this.total = this.total * a;
    return this;
  },
  subtract(a) {
    this.total = this.total - a;
    return this;
  },
};

const result = calc.add(5).multiply(10).subtract(7).add(10);
console.log(result.total);
