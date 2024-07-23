function count(string) {
    let charCount = {};
    for (const char of string) {
        //check if the char is already in the object 
        //hasOwnProperty returns a boolean
        if (charCount.hasOwnProperty(char)) {
            charCount[char]++; 
            //add 1 to the value of the char passed as a property in the object
        } else {
            //if the char is not found in the object then assign its value as 1
            charCount[char] = 1;
        }
    }
    return charCount;
}
console.log(count("aba"));  // Output: {a: 2, b: 1}
console.log(count(""));      // Output: {}
console.log(count("abcaded"))

//check if the string is empty and then return {} else count for the characters
//loop through an array the string and take the letter as the key to an object and its
//number of occurences as the value