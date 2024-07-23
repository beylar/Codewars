function checkParity(parity, bin){
  let value = bin.split("").filter(bit => bit === '1').length
  let isEven = value % 2 === 0
  if(parity === "even") {
    return isEven ? 0 : 1 }
  else if(parity === "odd"){
    return isEven ? 1 : 0
    }
}
  console.log(checkParity('even',101010))//1
  console.log(checkParity('odd',101010))//0
  console.log(checkParity('even',101011))//0
  
//split the given number and count the number of 1 to a sum to even or odd
//then check if the parity is even add 0 else 1
//then check if the parity is odd add 1 else 0