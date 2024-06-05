function moreZeros(s){
    let binary = []
    let result = []
    for(let i= 0; i<s.length; i++){
      binary.push((s.charCodeAt(i)).toString(2))
    }
    binary.map((el) => {
    let chr = el.split("");
    let countOnes = chr.filter((e) => e === "1").length;
    let countZeros = chr.filter((e) => e === "0").length;
    return countZeros > countOnes ? result.push(String.fromCharCode(parseInt(el,2))) : "" 
})
return [...new Set(result)]
}

console.log(moreZeros("abcde"))