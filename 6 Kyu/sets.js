function removeDuplicates(inputObj) {
    let newObj;
    for (let key in inputObj) {
      //let numericKey = Number(key);
      let uniqueChars = new Set(inputObj[key]);
      console.log(uniqueChars)
      

      inputObj[key] = Array.from(uniqueChars);
    }
    
    return inputObj;
  }
  

  const input = {
    "1": ["A", "B", "C"],
    "2": ["A", "B", "D", "A"],
  };
  
  const outputTable = removeDuplicates(input);
  console.log(outputTable);
  