console.log("RECURSIONN");

function range(start, end){
  if (end < start){
    return [];
  } else {
    const result = range(start, (end - 1));

    result.push(end);
    return result;
  }

}

console.log(range(5,10));

Array.prototype.recursiveSum = function() {
  if (this.length === 1){
    return this[0];
  } else {
    let temp = this.pop();
    return this.recursiveSum() + temp;
  }
};

console.log([5,6,7].recursiveSum());

Array.prototype.iterativeSum = function(){
  let sum = 0;

  this.forEach( (el) => sum += el );

  return sum;
};
console.log([5,6,7].iterativeSum());

function exponentiation(b, exponent){
  if (exponent === 0) {
    return 1;
  }else{
    let temp = exponentiation(b, exponent - 1);
    return b * temp;
  }
}

console.log(exponentiation(2,5));
