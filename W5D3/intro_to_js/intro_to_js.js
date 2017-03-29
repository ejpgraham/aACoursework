console.log("hihihi");


function myUniq(arr) {
  let result = [];
  for(let i=0; i<arr.length; i++){

    if(!(result.includes(arr[i]))){
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(myUniq([1,2,3,4,1,2]));
console.log(myUniq([1,2,3,4,1,2,"siesta", "meowth", "siesta"]));


function twoSum(arr) {
  let result = [];

  for (var i = 0; i < arr.length; i++) {
    let firstNum = arr[i];

    for (var j = (i+1); j < arr.length; j++) {
      let secondNum = arr[j];
      if ((firstNum + secondNum) === 0){
        result.push([i,j]);
      }
    }
  }
  return result;
}

console.log(JSON.stringify(twoSum([-1, 0, 2, -2, 1])));


function myTranspose(arr) {
  let results = new Array(arr.length).fill(new Array(arr[0].length))
}
