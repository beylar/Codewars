function encode(string){
    // string = [...string]
    // for(let i=0;i<string.length; i++){
    //     if(vowels.includes(string[i])){
    //       string[i]= vowels.indexOf( string[i])+ 1
    //     }
    // }

  return [...string].map(el => {return ( "aeiou".includes(el))?  "aeiou".indexOf(el) + 1 : el}).join('')}

  function decode(string){
    return [...string].map(el => {return ("12345".includes(el)) ? {'1':"a","2":"e","3":"i","4":"o","5":"u"}[el] : el}).join('')
  }

console.log(encode('hello'))
console.log(decode('h2ll4'))
console.log(encode('firstname'))
console.log(encode("I love programming"))