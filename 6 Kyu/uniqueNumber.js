function findUniq(arr) {
    return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n))
  }
  
  console.log(findUniq([1,1,2,1,1]))
  