async function something() {
  console.log("1");
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("2");
      resolve("done!");
    }, 100);
  });
  await promise;
  setTimeout(() => {
    console.log("3");
  }, 100);
  console.log("4");
}
something().then();
console.log("5");

// 1
// 5
// 2
// 4
// 3
