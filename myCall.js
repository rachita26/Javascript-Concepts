//Given a function foo and an object bar, without using call bind or apply, and without changing foo, assign bar as a context of foo:
function foo() {
  console.log(this.a);
}

// const foo = () => {
//   console.log(this.a);
// };

const bar = {
  a: "Hello",
  //   fn: -> foo
  // foo: () => {
  //   console.log(this.a);
  // },
};

// fn.call(this, args)
Function.prototype.myCall = function (context, ...args) {
  context.fn = this;
  return context.fn(...args);
  // bar.fn()
};

foo.myCall(bar);
