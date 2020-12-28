const { getMaxListeners } = require("process");

// function sum(n){
//     let x = n.toString();
//     let l =x.length;
//     var s = 0
//     for(let i = 0; i<l; i++){
//         s = s + Number(x.charAt(i))
//     }
//     return s;
// }
// console.log(sum(0));


// var email = "pankaj@gmail.com";
// let l = email.length;
// let ch = email.lastIndexOf('@');
// console.log(email.substring(ch+1,l));
// console.log(ch);


// var legs =10;
// p=2, c=4

// [1,3,5]

function findPerson(legs){
    let p =2;
    let c = 4;
    var people = [];
    var max = Math.floor(legs/p);
    people.push(max);
    for(let i=0; i<max; i++){
        let cats = legs - (i*p); //2
        if(cats%c == 0) people.push(i);
    }
    people.sort();
    console.log(people);
}
findPerson(6);