function sum() {
  const args = Array.prototype.slice.call(arguments);
  let sum = 0;
  args.forEach((el) => sum += el);
  return sum;
}

function sumREST(...rest) {
  let sum = 0;
  rest.forEach((el) => sum += el);
  return sum;
}





Function.prototype.myBind = function (context, ...args) {
  return () => this.apply(context, args);
};

class Dog {
  construct(name) {
    this.name = name;
  }

  sayHi(something) {

    return `hi I'm ${this.name}, you're ${something}`;
  }
}

let obj = { name:"stuff" };
let func = Dog.prototype.sayHi.myBind(obj, "friend");
console.log(func());
