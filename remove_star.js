var str1 = "xyz**";
var str2 = "xz*z*";

function remove(str) {
  let i = str.indexOf("*");
  while (i > -1) {
    str = str.replace(str.charAt(i - 1), "");
    str = str.replace(str.charAt(i - 1), "");
    i = str.indexOf("*");
  }
  return str;
}

str1 = remove(str1);
str2 = remove(str2);

console.log("str1::", str1);
console.log("str2::", str2);
console.log(str1 === str2);
