function onlyDuplicates(str){
    let newStr = ""
    for(i = 0; i<str.length; i++){
      if(str.indexOf(str[i]) !== str.lastIndexOf(str[i])){
        newStr += str[i]
      }
    }
    return newStr
  }
  
  console.log(onlyDuplicates("abceedggfge"))