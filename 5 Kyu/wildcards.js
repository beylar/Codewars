function possibilities(str) {
    const results = [];
  
    function helper(current, index) {
      if (index === str.length) {
        results.push(current);
        return;
      }
  
      if (str[index] === '?') {
        helper(current + '0', index + 1);
        helper(current + '1', index + 1);
      } else {
        helper(current + str[index], index + 1);
      }
    }
  
    helper('', 0);
    return results;
  }

console.log(possibilities('101?'))
console.log(possibilities('1?1?'))

//option 2: Using ternary operator
/*
const possibilities = (s) =>
  s.includes("?")
    ? [...possibilities(s.replace("?", "0")), ...possibilities(s.replace("?", "1"))]
    : [s];
*/