/* Iterate through the values from 0 to n/2 and let those values equal to a
while n= a+b , calculate b from the equation. Turn the values a and b into strings
and use the unary operator for parseInt and calculate the sum of each digit for
a and b. Then calculate the overall sum */

function solve(n){
    let a;
   let b;
   let sum;
   for (let i=0; i<n / 2; i++){
    a = i
     b= n - a;
   }
   a = String(a);
   b = String(b);
   let digitSumA = 0;
   for (let char of a){
    digitSumA += + char;
   }
   //console.log(digitSumA)
   let digitSumB = 0;
   for (let char of b){
    digitSumB += + char;
   }
//    console.log(digitSumB);
   sum = digitSumA + digitSumB;

   return sum
 }
 console.log(solve(29));
 console.log(solve(98));
 console.log(solve(54));

 //My code works here
 //?? what is the use of maxDigitSum
