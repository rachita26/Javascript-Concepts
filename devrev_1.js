const getA = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Math.random());
    }, 300);
  });
};

const getB = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Math.random());
    }, 200);
  });
};

const getC = () => {
  return Math.random();
};

const getSum = () => {
  let sum = 0;
  Promise.all([getA(), getB()]).then((values) => {
    sum += values[0] + values[1];
    sum += getC();
    console.log("Sum::", sum);
  })
};

getSum();
