function Car(make, model, year, color,drive){

    this.make = make,

    this.model = model,

    this.year = year,

    this.color = color

    this.drive = function(){ console.log(`This car is built in ${this.year} `)}

}



const car1 = new Car("ford", "m1", 2023, "blue");

