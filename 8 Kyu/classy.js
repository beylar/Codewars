class Person {
    constructor(name, age) {
      this.name = name;
        this.age = age;
    }

    get info(){
        return `${this.name} age is ${this.age}`
    }
}

 let person = new Person('johns', 34)
console.log(person.info)