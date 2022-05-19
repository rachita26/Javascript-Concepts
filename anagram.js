// {LIISTENA} {SILENTC}

// obj <ch: freq++>
// obj hasownProp(i)

// L1 I1 S1 T1 E1 N1 A1

// S1 I1 L1 E1 N1 T1 P1

function getMap(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj.hasOwnProperty(str.charAt(i))) {
      let f = obj[str.charAt(i)];
      obj[str.charAt(i)] = f++;
    } else {
      obj[str.charAt(i)] = 1;
    }
  }
  return obj;
}

function anagram(str1, str2) {
  const obj1 = getMap(str1);
  const obj2 = getMap(str2);
  let ctr = 0;

  if (Object.keys(obj1).length === Object.keys(obj2).length) {
    for (let i = 0; i < Object.keys(obj1).length; i++) {
      if (
        obj2.hasOwnProperty(Object.keys(obj1)[i]) &&
        obj2[Object.keys(obj1)[i]] === obj1[Object.keys(obj1)[i]]
      ) {
        ctr++;
      }
    }
    if (ctr === Object.keys(obj1).length) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

const res = anagram("LISTEN", "LISTENIG");
console.log(res);
