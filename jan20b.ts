interface Product{
    id:number,
    name:string,
    price:number

    display(): void;
}

class Products implements Product {
    id: number;
    name: string;
    price: number;
  
    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
  
    display(): void {
        console.log(`Product ID: ${this.id}`);
        console.log(`Product Name: ${this.name}`);
        console.log(`Product Price: ${this.price}`);
    }
}

const product1=new Products(101, "mobile", 25000);
product1.display();

