
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
  });
}
//
// function test(ans){
//   console.log(ans);
// }

// askIfGreaterThan(4,5,test);


function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop){
  if (i === arr.length - 1) {
    outerBubbleSortLoop(madeAnySwaps); } else {
      askIfGreaterThan(arr[i], arr[i+1],function(isGreaterThan){
        if(isGreaterThan){
          let temp = arr[i+1];
          arr[i+1] = arr[i];
          arr[i] = temp;
          madeAnySwaps = true;
        }
        innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
      });
    }
  }


// innerBubbleSortLoop([5,4,3,2,1], 0, false, function() {
//   console.log("in outer bubble sort");
// });

function absurdBubbleSort(arr, sortCompletionCallback){
  function outerBubbleSortLoop(madeAnySwaps){
    if (madeAnySwaps){
      madeAnySwaps = false;
      innerBubbleSortLoop(arr, 0, madeAnySwaps, outerBubbleSortLoop);
    }else{
      sortCompletionCallback(arr);
    }
  }

  outerBubbleSortLoop(true);
}


absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
