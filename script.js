class Car{
    constructor(brand, model, colour, price){
        this.brand=brand
        this.model=model
        this.colour=colour
        this.price=price
    }
}

var car1=new Car("Toyota", "Kluger", "Black", "1.5Million")
var car2=new Car("Toyota", "Prado", "Grey", "1.2Million")
document.write(car1.model)