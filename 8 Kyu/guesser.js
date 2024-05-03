class Guesser {
    constructor(number, lives) {
      this.number = number;
      this.lives = lives;
    }
    
    //my guess have the input
    //checking if the lives of guess are greater than 0
    //--- return 'throw error if not
    //?? Unspecified assertion error
    
    
    //my guess have the input
    //checking if the lives of guess are greater than 0
    //--- return 'throw error if not
    guess(n) {
        this.number = 2;
        this.lives = 2;
            //lives reduce
            //?? What is the logic
        for(this.lives = lives ; this.lives> 0; this.lives--){
        
            if(n === this.number){
                return true;
            }
            else{
                this.lives --;
                return false;
                
            }
         } 
        }
        // else{
        //     return "Error"
        // }
    
    }
  
  let guesses = new Guesser();
  console.log(guesses.guess(5,2))
  console.log(guesses.guess(2,2))
  console.log(guesses.guess(6,2))


        