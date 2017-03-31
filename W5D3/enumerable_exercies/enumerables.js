
Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    (callback(this[i]));
  }
  return this;
};

function doubleNum(num) {
  return num * 2;
}
// QUESTION: why would you ever store a function in a variable if you can reference it directly by the function name
 console.log([1,2,3].myEach(doubleNum));


Array.prototype.myMap = function(callback) {
  let results = [];
  this.myEach( (el) => results.push(callback(el)) );

  return results;
};

// console.log([1,2,3].myMap(doubleNum));

// def my_map(prc)
//   results = []
//   self.my_each do |el|
//     results.push(prc.call(el))
//   end
// end

Array.prototype.myInject = function(callback) {
  let accumulator = this[0];
  const temp = this;
  temp.shift();

  temp.myEach( (el) => accumulator = callback(accumulator, el) );


  return accumulator;
};

let sum = function(accum, el) {
  return accum + el;
};

console.log([1,2,3].myInject(sum));


// def myMap(proc)
//   results = []
//   self.each{|x| results <<x.proc}
//   results
// end
