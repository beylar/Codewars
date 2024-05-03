function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.name = this.firstName + ' ' + this.lastName;
}
//return in a constructor function changes the reference of the object only to the returned value

class Name{
    constructor(first,last){
        this.firstName = first;
        this.lastName = last;
        this.name = this.firstName + ' ' + this.lastName;
    }
}

let n = new Name('John', 'Doe');
console.log(n.firstName) //Expected: John
console.log(n.lastName) //Expected: Doe
console.log(n.name) //Expected: John Doe
