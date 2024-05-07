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
   
        
            //lives reduce
            //?? What is the logic
            

            if(this.lives > 0){
            if(n === this.number){
                return true;
            }
            else{
                this.lives --;
                return false;
                
            }
         } 
         else{
            throw new Error("Out!!!!")
        }
        }
        
    }
        // else{
        //     return "Error"
        // }
    

  
  let guesses = new Guesser(2,2);
  console.log(guesses.guess(5))
  console.log(guesses.guess(2))
  console.log(guesses.guess(6))
  console.log(guesses.guess(3))


        