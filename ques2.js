console.log('Start');
setTimeout(() => {
  console.log('1')
}, 0); //cb 2
console.log(2);
setTimeout(() => {
  console.log('3')
}, 200); //cb 3
Promise.resolve(4).then((value) => {
  console.log(value)
}); //cb 1
console.log('End');

// start
// 2
// end
// 4
// 1
// 3