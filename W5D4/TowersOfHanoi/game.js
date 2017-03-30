// const readline = require('readline');
//
// const reader = readline.createInterface({
//   // it's okay if this part is magic; it just says that we want to
//   // 1. output the prompt to the standard output (console)
//   // 2. read input from the standard input (again, console)
//
//   input: process.stdin,
//   output: process.stdout
// });

class Game{
  constructor(){
    this.stacks = [[1,2,3],[],[]];
  }

  promptMove(){
    console.log(this.stacks);
    reader.question("Please pass starting tower and ending tower: idx1,idx2 ", function (answer){
        let temp = answer.split(",");
        let startTower = parseInt(temp[0]);
        let endTower = parseInt(temp[1]);
        console.log(startTower);
        console.log(endTower);
    });
  }


  isValidMove(start, end) {
    if (start > 2 || start < 0 || end > 2 || end < 0 || this.stacks[start].length === 0) {
      return false;
    }
    if (this.stacks[end].length === 0) {
      return true;
    }

    if (this.stacks[start][0] > this.stacks[end][0]) {
      return false;
    }

    return true;
  }

  move(start, end) {
    if (this.isValidMove(start, end)) {
      this.stacks[end].unshift(this.stacks[start].shift());
      return true;
    }
    return false;
  }
}

var g = new Game();
console.log(g.isValidMove(1,2));
