// square() must return a copy of the array, containing all values squared
// cube() must return a copy of the array, containing all values cubed
// average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
// sum() must return the sum of all array values
// even() must return an array of all even numbers
// odd() must return an array of all odd numbers

//You can not use arrow function in prototype chaining as they inherit their this from parent in their scope and not
// to the instance and so it gives undefined

Array.prototype.square = function() {
   return this.map(element => element * element);
 } ;

 Array.prototype.cube = function() {
    return this.map(element => element * element * element);
  } ;

  Array.prototype.average = function() {
    let sum = 0;
  for (let i = 0; i < this.length; i++) {
    sum += this[i];
  }
  return sum / this.length;
  } ;

  //on the sum i can't use map as it is used to perform a condition on all the elements of an array
  Array.prototype.sum = function() {
    let sum = 0;
    for(let i=0; i<this.length; i++){
        sum += this[i]
    }
    return sum;
  } ;

  //Every checks if all elements of an array meet the condition and returns a boolean
  Array.prototype.ifEven = function() {
    return this.every(element => element % 2 === 0);
  };

  Array.prototype.even = function() {
    return this.filter(element => element % 2 === 0);
  };

  //To get the elements use filter

    Array.prototype.odd = function() {
        return this.filter(element => element % 2 !== 0);
      };

      Array.prototype.IfOdd = function() {
        return this.every(element => element % 2 !== 0);
      };

  const numbers = [1, 2, 3, 4, 5];
  console.log(numbers.square()); // Output: [1, 4, 9, 16, 25]
  console.log(numbers.cube());
  console.log(numbers.average())
  console.log(numbers.sum());
  console.log(numbers.even());
  console.log(numbers.odd());
  