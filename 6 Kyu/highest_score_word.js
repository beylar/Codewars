function high(x) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const words = x.split(" ");
    
    const wordValues = words.map(str => {
      let wordValue = 0;
      for (let i = 0; i < str.length; i++) {
        wordValue += alphabet.indexOf(str[i]) + 1;
      }
      return wordValue;
    });
  
    let maxValue = Math.max(...wordValues);
    let maxIndex = wordValues.indexOf(maxValue);
  
    return words[maxIndex];
  }
  
  console.log(high("man i need a taxi up to ubud")); 
  console.log(high("what time are we climbing up the volcano")); 
  console.log(high("take me to semynak"));
  
  
  //split the elements into an array
  //loop through the strings and count the values of the letters according to their location in the alphabetic letters
  //compare the sum of each string and output the string with the highest value