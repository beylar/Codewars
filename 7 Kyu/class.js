class Product{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }

    getDetails(){
        return `${this.name} costs ${this.price}`
    }

    applyDiscount(discount){
        let discountPrice = this.price * (discount/100)
        return discountPrice;
    }
}

let myProduct = new Product("Juice", 1000)
console.log(myProduct.getDetails());
console.log(myProduct.applyDiscount(20))