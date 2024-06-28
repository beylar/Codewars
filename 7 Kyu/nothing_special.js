function nothingSpecial(str) {
    const specialChars = '@#$%^&*()-=_+{}[]|:;\'<>,./!?~`"\\';
    let result = "";
  
    if (typeof str !== "string") {
      return "Not a string!";
    }
  
    for (let i = 0; i < str.length; i++) {
      if (!specialChars.includes(str[i])) {
        result += str[i];
      }
    }
  
    return result;
  }

  console.log(nothingSpecial(""))
  console.log(nothingSpecial(" Hello$"))
  console.log(nothingSpecial("58ehaohf/ao'agaht8 0902"))
  console.log(nothingSpecial("%ahfo 5fj"))