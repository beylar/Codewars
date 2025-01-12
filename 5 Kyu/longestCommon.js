function LCS(x, y) {
    const dp = Array(x.length + 1).fill().map(() => Array(y.length + 1).fill(0));
    for (let i = 1; i <= x.length; i++) {
      for (let j = 1; j <= y.length; j++) {
        dp[i][j] = x[i - 1] === y[j - 1] ? dp[i - 1][j - 1] + 1 : Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
    let lcs = '', i = x.length, j = y.length;
    while (i > 0 && j > 0) {
      if (x[i - 1] === y[j - 1]) lcs = x[i - 1] + lcs, i--, j--;
      else dp[i - 1][j] > dp[i][j - 1] ? i-- : j--;
    }
    return lcs;
  }

console.log(LCS( "abcdef" , "abc" ))
console.log(LCS( "abcdef" , "acf" ))
console.log(LCS( "132535365" , "123456789" ))