//  16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

// function digitalRoot(n) {
//   let num = String(n).split("");
//   let sum = 0;
//   let total;
//   let final = 0;
//   for(let i=0; i<num.length; i++){
//     sum += Number(num[i])
//   }
//   total = String(sum).split("");
//   if(total.length === 1){
//     return sum;
//   }
//   else{
//     for(let j=0; j<total.length; j++){
//       final += Number(total[j])
//     }
//     if(final.length === 1){
//       return final;
//     }
//   }

// }

function digitalRoot(n) {
  let sum = n.toString().split('').reduce((acc, curr) => Number(acc) + Number(curr), 0);
  while (sum > 9) {
    sum = sum.toString().split('').reduce((acc, curr) => Number(acc) + Number(curr), 0);
  }
  return sum;
}
console.log(digitalRoot(16))
console.log(digitalRoot(172930420))
console.log(digitalRoot(493193))

