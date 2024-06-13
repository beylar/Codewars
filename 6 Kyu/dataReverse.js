function dataReverse(data) {
    let firstArr = [];
    let secondArr = [];
 for(let i=0; i<data.length; i++){
     firstArr.push(data[i])
    if(firstArr.length == 8){
        secondArr.push(firstArr)
        firstArr = []
    }
 }
 return secondArr.reverse().flat();
}

console.log(dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]))