var Products = /** @class */ (function () {
    function Products(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    Products.prototype.display = function () {
        console.log("Product ID: ".concat(this.id));
        console.log("Product Name: ".concat(this.name));
        console.log("Product Price: ".concat(this.price));
    };
    return Products;
}());
var product1 = new Products(101, "mobile", 25000);
product1.display();
