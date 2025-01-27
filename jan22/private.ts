class MyClass {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    // // Getter
    // get name(): string {
    //     return this._name;
    // }

    // // Setter
    // set name(newName: string) {
    //     if (newName.length > 0) {
    //         this._name = newName;
    //     } else {
    //         console.log("Name cannot be empty");
    //     }
    // }
}

const instance = new MyClass("John");
console.log(instance.name); // John

instance.name = "Doe";
console.log(instance.name); // Doe

instance.name = ""; // Name cannot be empty
