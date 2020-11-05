//In a method, this refers to the owner object(person)

var person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function (x) {
    return x + this.firstName + " " + this.lastName;
    // return this; (gives person object)
  },
};
// console.log(person.fullName()); //John Doe
// console.log(typeof person.fullName);

let f = person.fullName.bind(this, ["Hi"]);
console.log(typeof f);
console.log(f());

//When used alone, the owner is the Global object, so this refers to the Global object.
//In a browser window the Global object is [object Window]:
//node this.js returns {}

// var x = this;
// console.log(x);

// function checkThis() {
//   return this;
// }
// var check = checkThis();
// console.log(check); //Returns the function as a global object
// console.log(typeof checkThis);
