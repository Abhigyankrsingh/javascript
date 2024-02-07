class Product {
    constructor(name, year) {
      this.name = name;
      this.year = year;
    }
  
    displayProduct() {
      console.log(`This is the ${this.name} and it was manufactured in ${this.year}`);
    }
  }
  const product2 = new Product("Samsung", 1998);
  const product1 = new Product("Samsung", 1998);
  product1.displayProduct();
  