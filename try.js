function cal(n) {
  let r = 0;
  for (let i = 0; i < 5; i++) {
    setTimeout(function () {
      r = 10;
    }, 100);
    setTimeout(function () {
      r = r + i;
    }, 150);
    setTimeout(function () {
      console.log(r);
    }, 500);
  }
}
cal(5);
