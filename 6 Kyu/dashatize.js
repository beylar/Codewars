function dashatize(num) {
    let str = String(num).split("")
    let result = ""
    if(str.length === 1){
      return str.join("")
   }
    else if(str.length > 1){
    for(let i = 0; i< str.length; i++){
      if(str[i] % 2 !== 0){
        if(str[i+1] % 2 !== 0 && str[i-1] !== 0){
          if(i === 0){
            result += `${str[i]}-`
          }
          else{
            
          result += `${str[i]}`
          }
        }
        else if(str[i-1] % 2 !== 0){
          result += `${str[i]}-`
        }
        else{
        result += `-${str[i]}-`
        }
        
      }
      else{
        result += str[i]
      }
    }
  return result
      }
  }
  
  console.log(dashatize(5311))
  
  //change the numbers into strings
  //iterate through a string and if the string is odd add - before and after it
  //return the string with the dashes
  // ?? should it be an array in order to be to add the - or a string can 