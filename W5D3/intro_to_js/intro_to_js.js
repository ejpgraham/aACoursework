// console.log("hihihi");
//
//
// function myUniq(arr) {
//   let result = [];
//   for(let i=0; i<arr.length; i++){
//
//     if(!(result.includes(arr[i]))){
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
//
// console.log(myUniq([1,2,3,4,1,2]));
// console.log(myUniq([1,2,3,4,1,2,"siesta", "meowth", "siesta"]));
//
//
// function twoSum(arr) {
//   let result = [];
//
//   for (var i = 0; i < arr.length; i++) {
//     let firstNum = arr[i];
//
//     for (var j = (i+1); j < arr.length; j++) {
//       let secondNum = arr[j];
//       if ((firstNum + secondNum) === 0){
//         result.push([i,j]);
//       }
//     }
//   }
//   return result;
// }
//
// console.log(JSON.stringify(twoSum([-1, 0, 2, -2, 1])));


function myTranspose(arr) {
  let results = new Array(arr.length);
  for (let x = 0; x < results.length; x++) {
    results[x] = [];
  }

  for (let i = 0; i < arr.length; i++ ) {
    for (let j = 0; j < arr[0].length; j++) {
      results[i][j] = arr[j][i];
    }
  }
  return results;
}

console.log(myTranspose([
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ]));
