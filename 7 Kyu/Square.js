function squareDigits(num){
    let number = num.toString().split('')
    let sum= []
    for (let i=0; i<number.length; i++){
        sum.push(number[i] * number[i])
    }
    sum = sum.join('');
    sum = Number(sum)
    console.log(sum)
    
  }
  console.log(squareDigits(123));