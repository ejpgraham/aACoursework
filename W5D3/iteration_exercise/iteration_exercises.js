console.log("ITERATIONNNNNN");


Array.prototype.bubbleSort = function(){
  let sorted = false;

  while (!sorted){
    sorted = true;

    for (let i = 0; i < this.length-1; i++) {
      let currentNum = this[i];
      let nextNum = this[i+1];

      if (currentNum > nextNum){
        sorted = false;
        this[i] = nextNum;
        this[i+1] = currentNum;
      }
    }
  }
  return this;
};


console.log([5,4,3,2,1].bubbleSort());

function substrings(input){
  let results = [];
  for (let i = 0; i < input.length; i++) {
    for (var j = i + 1; i < input.length; i++) {
      let substring = input.slice(i,j);
        if (!(results.includes(substring))){
          results.push(substring);
        }
    }
  }
  return results;
}


console.log(substrings("cat"));
