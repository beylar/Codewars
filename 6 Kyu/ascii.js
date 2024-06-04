function moreZeros(s){
    let binary = []
    for(let i= 0; i<s.length; i++){
      binary.push((s.charCodeAt(s[i])).toString(2))
    }
    let countOnes = 0;
    let countZeros = 0;
    for(let str of binary){
        for (let char of str ){
            if(char == '1'){
                countOnes++;
            }
            else if(char == '0'){
                countZeros++;
            }
        }
    }
    // console.log(countOnes);
    // console.log(countZeros)
}

console.log(moreZeros("abcde"))