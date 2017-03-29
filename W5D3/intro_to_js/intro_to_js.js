console.log("hihihi")


function removeDuplicates(arr) {
  const holder = [];

  for(let i=0; i < arr.length; i++) {
    if (holder.includes(arr[i])){
      continue;
    } else {
      holder.push(arr[i]);
    }
  }
  return holder;
}

console.log(removeDuplicates([1,2,3,4,1,2]));
console.log(removeDuplicates([1,2,3,4,1,2,"siesta", "meowth", "siesta"]));


function two_sum(arr) {
  const 
}
