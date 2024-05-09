class Cuboid {
  constructor(length,width, height){
    this.length = length;
    this.width = width;
    this.height = height;
  }

  get surfaceArea(){
    return 2*((this.length * this.width) + (this.width * this.height) + (this.length * this.height))
  }

  get volume(){
    return this.length* this.width * this.height;
  }
}
class Cube extends Cuboid {
  constructor(length,width, height){
    super(length, width, height);
    this.length = length;
    this.width = length;
    this.height = length
    
  }

  

    get surfaceArea(){
        return 6* this.length**2
    }

    get volume(){
        return this.length**3
    }
  
  }

let calculate = new Cuboid(10,20,15);
console.log(calculate.surfaceArea)
let other = new Cube(10)
console.log(other.surfaceArea)