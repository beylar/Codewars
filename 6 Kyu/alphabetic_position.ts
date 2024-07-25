function alphabetPosition(text: string): string {
    let alphabets: string = "abcdefghijklmnopqrstuvwxyz";
    let output: string = "";
    const cleanedText: string = text.toLowerCase().replace(/[^a-z]/g, "");
  
    for (let char of cleanedText) {
      output += String(alphabets.indexOf(char) + 1) + " ";
    }
  
    return output.trim();
  }
  
  console.log(alphabetPosition("The sunset sets at twelve o' clock."));
  // Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 


//iterate through the text and find its position in the alphabets string 
//+= the length + 1 in the string output