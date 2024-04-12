function compressString(str){
    str = str.replaceAll(" ","");
    str = str.toUpperCase();
    let newStr = "";
    let counter = 1;
    for (let i=0; i<str.length; i++){
        if(str[i] === str[i+1]){
            counter++;
        }
        else {
            newStr += str[i] + counter
            counter =1;
        }
    }
    return newStr
}
console.log(compressString("AAAA BB  BCCDAA")); // should return "A4B3C2D1A2"
console.log(compressString("XYZ")); // should return "X1Y1Z1")