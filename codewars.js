//  rounded down to its nearest integer!!

function getAverage(marks){
  let sum = 0;
  for(let i=0; i < marks.length; i++){
    sum += marks[i];
    sum_2 = sum / marks.length;
  }
  return sum_2;
}

let a = getAverage([1,2,3]);

console.log(a);