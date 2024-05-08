class Animal { 
    constructor(name) {
      this.name = name;
    }
    
    speak() {
      return this.name + ' makes a noise, '
    }
  }
  
  class Cat extends Animal {
    speak(){
        //accessing and concatinating a string from a child class which was made in the parent class
        return super.speak() + this.name +' goes meow'
    }
  }

  let sound = new Cat('Mr. sprikes');
  console.log(sound.speak())