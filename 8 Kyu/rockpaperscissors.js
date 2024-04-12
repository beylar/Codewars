const rps = (p1, p2) => {
  if(p1 === 'scissors' && p2 === 'paper' || p1 === 'paper' && p2 === 'rock' || p1 === 'rock' && p2 === 'scissors'){
    return "Player 1 won!"
  }
  else if(p1 === 'scissors' && p2 === 'scissors' || p1 === 'paper' && p2 === 'paper' || p1 === 'rock' && p2 === 'rock'){
    return "Draw!"
  }
  else {
    return "Player 2 won!"
  }
};

console.log(rps("scissors","rock"));
console.log(rps("rock","rock"));
console.log(rps("paper","scissors"));
