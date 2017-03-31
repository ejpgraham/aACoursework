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

// console.log(range(5,10));

Array.prototype.recursiveSum = function() {
  if (this.length === 1){
    return this[0];
  } else {
    let temp = this.pop();
    return this.recursiveSum() + temp;
  }
};

// console.log([5,6,7].recursiveSum());

Array.prototype.iterativeSum = function(){
  let sum = 0;

  this.forEach( (el) => sum += el );

  return sum;
};
// console.log([5,6,7].iterativeSum());

function exponentiation(b, exponent){
  if (exponent === 0) {
    return 1;
  }else{
    let temp = exponentiation(b, exponent - 1);
    return b * temp;
  }
}

// console.log(exponentiation(2,5));

function exponentiationTwo(b, exponent){
  if (exponent === 0) {
    return 1;
  }else if ( exponent === 1 ){
    return b;
  }else{
    if (exponent % 2 === 0){
      return exponentiationTwo(b, exponent /2) * exponentiationTwo(b, exponent /2);
    }else {
      return b * exponentiationTwo(b, (exponent-1) /2) * exponentiationTwo(b, (exponent-1) /2);
    }
  }
}

// console.log(exponentiationTwo(2,256));


function iterativeFibonacci(n){
  if (n===1){
    return [1];
  }
  if (n===2){
    return [1,1];
  }
  let holder = [1, 1];

  for (var i = 2; i < n; i++) {
    holder.push(holder[i-2] + holder[i-1]);
  }
return holder;
}

// console.log(iterativeFibonacci(10));

function recursiveFibonacci(n){
  if (n===1){
    return [1];
  }else if (n===2){
    return [1,1];
  } else {
    let prev = recursiveFibonacci(n-1);
    prev.push(prev[prev.length - 1] + prev[prev.length - 2]);
    return prev;
  }
}

// console.log(recursiveFibonacci(10));

function binarySearch(array,target){
  if (array.length === 0){
    return [];
  }else{
    // debugger
    let midIndex = Math.floor(array.length / 2);
    if (array[midIndex] === target){
      return midIndex;
    }else if (array[midIndex] > target){
      return binarySearch(array.slice(0, midIndex), target);
    }else {
      return midIndex + 1 + binarySearch(array.slice(midIndex + 1, array.length), target);
    }
  }
}
console.log(binarySearch([1,2,3,4,5],2));
console.log(binarySearch([1,2,3,4,5],5));
console.log(binarySearch([1,2,3,4,5],6));
