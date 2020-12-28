/*
INPUT

{
  a: {
    b: {
      c: {
        d: {
          e: 1
        }
      },
      f: 2
    },
    g: 3
  },
  h: 4
}

OUTPUT

{
  'a.b.c.d.e': 1,
  'a.b.f': 2,
  'a.g': 3,
  'h': 4
}
*/

function compress(input, parent = "", output = {}) {
  if (input instanceof Object && Object.keys(input).length > 0) {
    for (let key in input) {
      let item = parent !== "" ? `${parent}.${key}` : key;
      compress(input[key], item, output);
    }
  } else output[parent] = input;
  return output;
}
var input = {
  a: {
    b: {
      c: {
        d: {
          e: 1,
        },
      },
      f: 2,
    },
    g: 3,
  },
  h: 4,
};
console.log(compress(input));