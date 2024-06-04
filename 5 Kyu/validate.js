function alphanumeric(string){
    return string.match(/^[A-Za-z0-9]+$/) ? true : false;
  }

console.log(alphanumeric("Beyla "))
console.log(alphanumeric("Beyla"))
console.log(alphanumeric("Beyla_"))
console.log(alphanumeric("    "))