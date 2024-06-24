function wordSearch(query, seq) {
    const values = seq.filter(str => str.toLowerCase().includes(query.toLowerCase()));
    return values.length!== 0? values : ["Empty"];
  }
  
  console.log(wordSearch(["home", "milk", "world", "mercury"], "me")); 