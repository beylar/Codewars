function disemvowel(str) {
  return str.replace(/[aeuio]/gi, '');
}
console.log(disemvowel("This website is for losers LOL!"))