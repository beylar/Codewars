var countBits = function(n) {
    let binary = n.toString(2)
    // let binary = n.toString(2).split("")
    //iterate through the bits as a string or use split when you want to use an array
    let arr = []
    for(let i of binary){
        arr.push(Number(i))
    }
    let sum = arr.reduce((a, b) => a+b)
    return sum;
  
  };

console.log(countBits(1234))