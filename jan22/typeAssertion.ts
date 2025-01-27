// Type assertions are used to override TypeScript’s type inference when you know more about the type 
// than the compiler does.

// They do not perform any runtime checks or conversions; they are purely a compile-time construct.


let value:unknown="Hello! I am Aishwarya";
// let strlen:number=(value as string).length;  //error: value is of unknown type
let strlen:number=(<string>value).length;
console.log(strlen)

//Narrowing union types
function getLength(input:string|string[]):number {
    if ((input as string[]).length!==undefined) {
        return (input as string[]).length;
    }
    return (input as string).length;
}

console.log(getLength(["red","maths","prompt"]));
console.log(getLength("Ravindranath Tagore"));

let arr:any[]=[1,"ruhi",2];
let mixed=arr as string[];
console.log(typeof(mixed[1]));   //Assertions does not originally changes anything but can do operations

//JSON
interface User{
    name:string;
    id:number;
    age:number;
}

let jsonStr='{"name":"Aish", "id":1,"age":90}';
let user=JSON.parse(jsonStr) as User;

console.log(user.name);