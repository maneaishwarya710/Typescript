"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(name, age) {
        this._name = name;
        this._age = age;
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (nm) {
            if (nm.length === 0) {
                console.log("Name cannot be empty");
            }
            else {
                this._name = nm;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (ag) {
            if (ag < 0 || ag >= 200) {
                throw new Error("This age is invalid");
            }
            else {
                this._age = ag;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var person = new Person("Aishwarya", 21);
console.log(person.name);
console.log(person.age);
person.age = 22;
person.name = "";
console.log(person.age);
