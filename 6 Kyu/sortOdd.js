function sort(arr) {
    const oddNumbers = arr.filter(num => num % 2!== 0).sort((a, b) => a - b);
    let oddIndex = 0;
    return arr.map(num => {
      if (num % 2!== 0) {
        return oddNumbers[oddIndex++];
      } else {
        return num;
      }
    });
  }

console.log(sort([7, 1]))
console.log(sort([5, 8, 6, 3, 4]))
console.log(sort([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]))