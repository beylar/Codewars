function findOutlier(integers){
    let evenN = []
    let oddN = []
    let str;
    let num
   for(let i = 0; i< integers.length; i++){
    if(integers[i] % 2 === 0){
        evenN.push(integers[i])
    }
    else{
        oddN.push(integers[i])
    }
   }
   if(evenN.length === 1){
    str = evenN.join("")
    num = Number(str)
   }
   if(oddN.length === 1){
    str = oddN.join("");
    num = Number(str)
   }
   return num;
}
console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]))
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]))