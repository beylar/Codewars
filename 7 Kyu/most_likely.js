function mostLikely(prob1,prob2){
    let first = prob1.split(":")
    let second = prob2.split(":")
    const value = first.map(el => Number(el))
    const val = second.map(el => Number(el))
    let d = value[0]/ value[1]
    let f = val[0] / val[1]
    return d < f ? false : true
  }
  console.log(mostLikely('1:3', '1:2'))
  console.log(mostLikely('1:2', '1:3'))
  
  
  //compare the first and second string and return a boolean
  //find the value of the first string and the second string
  //to find the value use division?