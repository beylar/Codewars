function largestSum(arr) {
    if (arr.length === 0) return 0; 
  
    let maxSum = 0; 
    let currentSum = 0; 
  
    for (let num of arr) {
      currentSum = Math.max(0, currentSum + num); 
      maxSum = Math.max(maxSum, currentSum); 
    }
    return maxSum;
}

console.log(largestSum([-1, -2, -3])); // Output: 0
console.log(largestSum([]));          // Output: 0
console.log(largestSum([1, 2, 3]));   // Output: 6
console.log(largestSum([31, -41, 59, 26, -53, 58, 97, -93, -23, 84])); // Output: 187

