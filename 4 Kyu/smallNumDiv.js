
function generatePrimes(limit) {
    let primes = [];
    let isPrime = Array(limit + 1).fill(true);
    isPrime[0] = isPrime[1] = false;
  
    for (let i = 2; i <= limit; i++) {
      if (isPrime[i]) {
        primes.push(i);
        for (let j = i * i; j <= limit; j += i) {
          isPrime[j] = false;
        }
      }
    }
    return primes;
  }
  

  function countDivisors(exponents) {
    return exponents.reduce((prod, exp) => prod * (exp + 1), 1);
  }
  

  function f(d) {
    if (d < 1 || d > 10000) {
      throw new Error("Input must be in the range 1 <= d <= 10000");
    }
  
    const primes = generatePrimes(50); 
    

    function search(d, exps = [], idx = 0) {
      const divCount = countDivisors(exps);
      if (divCount === d) {
        return exps.reduce((num, exp, i) => num * Math.pow(primes[i], exp), 1);
      }
  
      if (divCount > d) return Infinity; 
  
      let min = Infinity;
      for (let i = idx; i < primes.length; i++) {
        exps[i] = (exps[i] || 0) + 1; 
        min = Math.min(min, search(d, [...exps], i)); 
        exps[i]--; 
      }
      return min;
    }
  
    return search(d); 
  }

  console.log(f(1));    // Output: 1
  console.log(f(3));    // Output: 4
  console.log(f(60));   // Output: 5040
  console.log(f(420));  // Output: 9979200
  