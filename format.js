Number.prototype.format = function () {
  return this.toString()
    .split(/(?=(?:\d{3})+(?:\.|$))/g)
    .join(" ");
};
var n = 98172365789642357;
console.log(n.format());
