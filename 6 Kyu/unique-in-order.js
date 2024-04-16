/* Program is to remove dupliactes that are consecutive in the array
first, i have to iterate through my array elements then have an if condition checking if my next element
is not the same as the element that I am currently on 
if not, i will push my element into the res array*/ 
var uniqueInOrder = function(iterable){
  var res = []
   for ( let i=0; i < iterable.length; i++){
     if (iterable[i] !== iterable[i+1]){
       res.push(iterable[i])
       
     }
     
   }
  return res
}
console.log(uniqueInOrder('AAAABBBCCDAABBB')) //['A', 'B', 'C', 'D', 'A', 'B']
console.log(uniqueInOrder('ABBCcAD'))         //['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([1,2,2,3,3]))       //[1,2,3]