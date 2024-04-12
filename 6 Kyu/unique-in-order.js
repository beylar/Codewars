var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
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