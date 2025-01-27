var MyClass = /** @class */ (function () {
    function MyClass(name) {
        this._name = name;
    }
    return MyClass;
}());
var instance = new MyClass("John");
console.log(instance.name); // John
instance.name = "Doe";
console.log(instance.name); // Doe
instance.name = ""; // Name cannot be empty
