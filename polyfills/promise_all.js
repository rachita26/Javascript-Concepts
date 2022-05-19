const getA = Promise.resolve("A");

const getB = Promise.reject("B error");

const getC = Promise.resolve("C");

function all(promises) {
  return new Promise((resolve, reject) => {
    let results = [];
    let completed = 0;

    promises.forEach((promise, i) => {
      promise
        .then((res) => {
          results[i] = res;
          completed += 1;

          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
}

all([getA, getB, getC])
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// O/P: B error
// all rejected if any one is rejected
