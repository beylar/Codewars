function gaslighting(shirtWord, yourWord, friendsLetters) {
  for (let i = 0; i < shirtWord.length; i++) {
    if (shirtWord[i] !== yourWord[i]) {
      for (let j = 0; j < friendsLetters.length; j++) {
        if (
          friendsLetters[j] === shirtWord[i] ||
          friendsLetters[j] === yourWord[i]
        ) {
          return true;
        }
      }
    }
  }
  return false;
}
console.log(gaslighting("snack","snake","c")); //returns true
console.log(gaslighting("smile","smirk",["s","m","i"])) //returns false