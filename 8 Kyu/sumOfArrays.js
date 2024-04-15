function sum (numbers) {
    "use strict";
    //the initial value of my sum is 0
    let sum= 0;
    //condition to iterate over the elements in the array is when my array is not empty
  if(numbers !== ""){
    //for loop to iterate over my numbers array
  for (let i=0; i<numbers.length; i++){
    //every element is added to the value of sum
    sum += numbers[i];
  }
  //return the calculated sum from the numbers in the array
    return sum;
    }
  else {
    //if there are no values in the array it will return 0
    return sum;
  }
};

console.log(sum([1,2,3]))