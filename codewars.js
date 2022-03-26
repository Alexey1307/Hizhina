let arr = [1,2,3,4,6,6,7,8];
// function firstNonConsecutive(arr) {
//   for(let i in arr){
//     if (i!=i+10) {
//       console.log(i)
//     }
//     else{
//       return null;
//     }
//   }
// }




function firstNonConsecutive(arr){
  for (let i =  0; i <= arr.length; i++) {
      let arr_2 = arr[i] +1;
      if (arr_2[i]-1 == arr) {
        console.log(arr_2);
      }
      
    }
  }
firstNonConsecutive(arr);


// If the whole array is consecutive then return null.