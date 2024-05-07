String.prototype.myNewMethod = function() {
    return this.toUpperCase();
  };

const myString = "new me";
console.log(myString.myNewMethod())