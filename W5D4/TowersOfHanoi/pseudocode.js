const readline = require('readline');

const reader = readline.createInterface({
  // it's okay if this part is magic; it just says that we want to
  // 1. output the prompt to the standard output (console)
  // 2. read input from the standard input (again, console)

  input: process.stdin,
  output: process.stdout
});

class Game{
  constructor(){
    this.stacks = [[1,2,3],[],[]];
  }

  promptMove(callback){
    this.print();
    reader.question("Please pass starting tower and ending tower: idx1,idx2 ", function (answer){
        let temp = answer.split(",");
        let startTower = parseInt(temp[0]);
        console.log(startTower);
        let endTower = parseInt(temp[1]);
        console.log(endTower);
        callback(startTower,endTower);
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

  print(){
    console.log(JSON.stringify(this.stacks));
  }

  isWon(){
    if (this.stacks[1].length === 3 || this.stacks[2].length === 3){
      return true;
    }
    return false;
  }

  run(completionCallback){
    this.promptMove( (start,end) => {

      if(this.move(start,end) === false){
        console.log("Invalid Move");
      }

      if(this.isWon()){
        completionCallback();
      }else{
        this.run(completionCallback);
      }
    });
  }
}

var g = new Game();
g.run(function() {
  console.log("You win");
  reader.close();
  });
