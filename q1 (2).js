var arr = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

//1,2,3,4,5

function f(arr) {
  let str = "";
  let l = arr.length;
//   arr.forEach((el, i) => {
//     if (i == l - 1) str = `${str}${el.id}`;
//     else str = `${str}${el.id},`;
//   });
  str = arr.map(el => 
    el.id
  );
  return str;
}

console.log(f(arr).toString());
