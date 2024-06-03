// You are a khmmadkhm scientist and you decided to play with electron distribution among atom's shells. 
// You know that basic idea of electron distribution is that electrons should fill a shell until it's 
// holding the maximum number of electrons.

function atomicNumber(num){
    //"What are we doing today, Brain?" "The same thing we did last week, Pinky... Take over the CodeWars"
    let atomic = [];
    // 1. can i implement the first values
      if(num <= 2){
        atomic.push(num);
      }
      else if(num <= 10){
        atomic.push(2);
        atomic.push(num-2)
      }
      else if(num <= 28){
        atomic.push(2)
        atomic.push(8)
        atomic.push(num-10)
      }
      else if(num <= 60){
        atomic.push(2);
        atomic.push(8)
        atomic.push(18);
        atomic.push(num - 28)
      }
      else if(num <= 82){
        atomic.push(2);
        atomic.push(8);
        atomic.push(18);
        atomic.push(32);
        atomic.push(num - 60)
      }
      // ?? Index 2: 2+6 = 8 index 2: 8+10 =18  index 3: 18+14 = 32 index 4: 32+18 = 60
    
    return atomic
  }

  // ?? Formulate a formula to use with the logic
console.log(atomicNumber(11))
console.log(atomicNumber(1))
console.log(atomicNumber(7))
console.log(atomicNumber(22))
console.log(atomicNumber(47))
console.log(atomicNumber(32))
console.log(atomicNumber(72))