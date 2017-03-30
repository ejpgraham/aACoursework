
const readline = require('readline');

const reader = readline.createInterface({
  // it's okay if this part is magic; it just says that we want to
  // 1. output the prompt to the standard output (console)
  // 2. read input from the standard input (again, console)

  input: process.stdin,
  output: process.stdout
});

function askIfGreaterThan(el1, el2, callback){
  reader.question(`Is ${el1} greater than ${el2}? `, function (answer) {
    if (answer === "yes"){
      callback(true);
    }else {
      callback(false);
    }
    reader.close();
  });
}

function test(ans){
  console.log(ans);
}

askIfGreaterThan(4,5,test);


function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop){
  if (i < arr.length - 1){
    askIfGreaterThan(arr[i], arr[i+1],function(isGreaterThan){
      if(isGreaterThan){
        let temp = arr[i+1];
        arr[i+1] = arr[i];
        arr[i] = temp;
        madeAnySwaps = true;
      }
    });
  }
}
