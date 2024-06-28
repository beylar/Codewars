function arr2bin(arr) {
    const sum = arr.reduce((acc, el) => {
      return typeof el === 'number'? acc + el : acc
    }, 0);
    return sum.toString(2);
  }
  console.log(arr2bin([1,2,'a','2']))
  
  // find the elements of an array that are numbers
  // find the sum of those numbers
  // change into sum of those numbers into binary