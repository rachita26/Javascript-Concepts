function allSettled(promises) {
  return new Promise((resolve, reject) => {
    let results = [];
    let completed = 0;

    promises.forEach((promise, i) => {
      promise
        .then((res) => {
          results[i] = {
            status: "fulfilled",
            value: res,
          };
          completed += 1;
        })
        .catch((err) => {
          results[i] = {
            status: "rejected",
            reason: err,
          };
          completed += 1;
        })
        .finally(() => {
          if (completed == promises.length) resolve(results);
        });
    });
  });
}

const getA = Promise.resolve("A");

const getB = Promise.reject("B error");

const getC = Promise.resolve("C");

allSettled([getA, getB, getC]).then((res) => console.log(res));


//  O/P: [
//   { status: 'fulfilled', value: 'A' },      
//   { status: 'rejected', reason: 'B error' },
//   { status: 'fulfilled', value: 'C' }       
// ]
// returns all with appropriate status