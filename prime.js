// 1 to n

// 2 to n-1

// 2 to n/2

// O(n^2)

// 1 2 3 4 5 6 7 8 9 10

function check(num) {
  let flag = true;
  for (let i = 2; i <= Math.floor(num / 2); i++) {
    if (num % i === 0) {
      flag = false;
      break;
    }
  }
  if (flag) console.log(num);
}

function getPrime(n) {
  for (let i = 2; i <= n; i++) {
    check(i);
  }
}

getPrime(10);
