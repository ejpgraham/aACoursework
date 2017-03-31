//mysun
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




//mybind
Function.prototype.myBind = function (context, ...args) {
  return () => this.apply(context, args);
};

Function.prototype.myBindArgs = function (context) {
  const args = Array.prototype.slice.call(arguments, 1);
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

//curriedSum
function curriedSum(numArgs){
  const numbers = [];

  function _curriedSum(num){
    numbers.push(num);
    if (numbers.length === numArgs) {
      let sum = 0;
      numbers.forEach((el) => sum += el);
      return sum;
    } else if (numbers.length > numArgs) {
      return "you messed up";
    }
    return _curriedSum;
  }

  return _curriedSum;
}

Function.prototype.curry = function (numArgs) {
  const allArgs = [];

  const that = this;
  function _curry(arg) {
    allArgs.push(arg);
    if(allArgs.length === numArgs) {
      return that(...allArgs);
    } else {
      return _curry;
    }
  }

  return _curry;
};

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

sumThree(4, 20, 6); // == 30

// you'll write `Function#curry`!
// let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
// f1 = f1(4); // [Function]
// f1 = f1(20); // [Function]
// f1 = f1(6); // = 30

// or more briefly:
console.log(sumThree.curry(3)(4)(20)(6)); // == 30
