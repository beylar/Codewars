var maxSequence = function(arr) {
    if (arr.length === 0) return 0; 
  
    let maxSum = 0; 
    let currentSum = 0; 
  
    for (let num of arr) {
      currentSum = Math.max(0, currentSum + num); 
      maxSum = Math.max(maxSum, currentSum); 
    }
  
    return maxSum;
};
  
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])) // Output: 6