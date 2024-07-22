function checkParity(parity, bin){
    let value = parseInt(bin, 2)
    isEven = value % 2 === 0
    if(parity === "even") return isEven ? 1 : 0
    else if(parity === "odd") return isEven ? 0 : 1
  }
  
  console.log(checkParity('even',101010))//1
  console.log(checkParity('odd',101010))//0
  console.log(checkParity('even',101011))//1
  
  
  
  //change from binary to decimal
  //check if the value is odd or even 
  //check what to add to turn it into odd