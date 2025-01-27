// Type assertions are used to override TypeScript’s type inference when you know more about the type 
// than the compiler does.
// They do not perform any runtime checks or conversions; they are purely a compile-time construct.
var value = "Hello! I am Aishwarya";
// let strlen:number=(value as string).length;  //error: value is of unknown type
var strlen = value.length;
console.log(strlen);
//Narrowing union types
function getLength(input) {
    if (input.length !== undefined) {
        return input.length;
    }
    return input.length;
}
console.log(getLength(["red", "maths", "prompt"]));
console.log(getLength("Ravindranath Tagore"));
var arr = [1, "ruhi", 2];
var mixed = arr;
console.log(typeof (mixed[1])); //Assertions does not originally changes anything but can do operations
var jsonStr = '{"name":"Aish", "id":1,"age":90}';
var user = JSON.parse(jsonStr);
console.log(user.name);
