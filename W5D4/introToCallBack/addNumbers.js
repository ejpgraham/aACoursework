
const readline = require('readline');

const reader = readline.createInterface({
  // it's okay if this part is magic; it just says that we want to
  // 1. output the prompt to the standard output (console)
  // 2. read input from the standard input (again, console)

  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  let currentSum = sum;
  let numbersLeft = numsLeft;
  if (numbersLeft > 0) {
    reader.question("What number should we add?", function (answer) {
      currentSum += parseInt(answer);
      console.log(currentSum);
      numbersLeft -= 1;
      addNumbers(currentSum, numbersLeft, completionCallback);
    });

  } else {
    reader.close();
    return completionCallback(sum);
  }
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
