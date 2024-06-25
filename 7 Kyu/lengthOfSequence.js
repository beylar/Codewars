let lengthOfSequence = function(arr, n) {
    const arrCopy = [...arr];
    const nIndices = arrCopy.reduce((acc, val, idx) => {
        if (val === n) acc.push(idx);
        return acc;
    }, []);

    if (nIndices.length!== 2) {
        return 0;
    } else {
        const length = nIndices[1] - nIndices[0] + 1;
        
        return length;
    }
};
console.log(lengthOfSequence([0, -3, 7, 4, 0, 3, 7, 9], 7)); // Output: 5


                
                  
                  
  // n occurences in my string ?? return 0 and the values of the arr that starts with n and ends with n
  // if                 