function bestFriend(txt, a, b){
    for(let i = 0; i<txt.length; i++){
        if(txt[i] === a){
          if(txt[i+1] !== b){
            return false;
          } 
        }
    }return true;
    
  }

  console.log(bestFriend("he headed to the mama", "m", "a"))
  console.log(bestFriend("he haded to the store", "h", "e"))