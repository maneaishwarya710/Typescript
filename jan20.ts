
//array
let numbers:number[]=[];
numbers.push(12);
console.log(numbers);
numbers.pop();
console.log(numbers);

//array as a tuple
let person:[string,number]=["Alice",30];
console.log(person)

//Object
let user:{id:number, username:string}={id:2122000489, username:"Aishwarya" }
console.log(user);

//Union
let unionVar:number|string;
unionVar="Nita";
unionVar=89;
console.log(unionVar);

//Intersection
interface Address{
    city:string;
    postalCode:number;
}

interface Coordinates{
    latitude:number;
    logitude:number;
}
type location=Address & Coordinates;

let myLocation:location={
    city:"Kolhapur",
    postalCode:416213,
    latitude:78,
    logitude:88
}
console.log(myLocation);

//type aliases
type direction="left"|"right"|"up"|"down";
let dir:direction;
dir="down";
console.log(dir);

//interface
interface User{
    id:number;
    name:string;
    age?:number             //? with variable name is optional property
}

const user1:User={
    id:202,
    name:"Ramesh",
    age:78
}

console.log(user1);

//readonly properties
interface Animal{
    readonly color:string;
    noOfLegs:number;
}

const a1:Animal={
    color:"green",
    noOfLegs:4
}

//a1.color="red";          //Cannot assign to 'color' because it is a read-only property

//Extending Interfaces
//Allows inheritance for interfaces
interface Person{
    name:string
}

interface Employee1 extends Person{
    id:number
}

const emp1:Employee1={
    name: "richa",
    id: 1002
};

console.log(emp1);

//enum
enum Status{
    Active=0,
    Inactive,
    Pending
}

const currStatus:Status=Status.Inactive;
console.log(currStatus);

enum Status1{
    admin="admin"
}

const curr1Status:Status1=Status1.admin;
console.log(curr1Status);

//functions in ts
function add(a:number, b:number):number {
    return a+b;
}

console.log(add(7,56));


function sub(a:number, b:number=900):number {                    //last parameter can be default
    return a-b;                                                  //if you want to keep earlier then last should 
}                                                                //atleast defaulted to 0

console.log(sub(56));

// function sub(a:number=90, b:number):number {                    
//     return a-b;                                                  
// }                                                               

// console.log(sub(56)); //error

function div(c:number, a:number=90, b:number):number {                    
    return c*a*b;                                                 
}                                                               

console.log(div(56, undefined, 34));

//Optional parameters
function myFun(name:string, id:number, email?:string) {
    console.log(`${name},${id},${email}`)
}

myFun("Aish",233);

//Arrow functions
const sum=(a1:number, a2:number):number=>{
    return a1+a2;
}

console.log(sum(23,56));

//Function overloading
//Same definition but different parameters
//In ts function overloading is achieved using "any" (implementation)
function combine(a:number, b:number):number;
function combine(a:string, b:number):string;
function combine(a:any, b:any):any{
    return a+b;
}

//console.log(combine("Aishwarya", "Avinash"));
console.log(combine(23,56));
//console.log(combine(23,"Kavya"));

//generics
//Generic function
function identity<T>(value:T):T{
    return value;
}

console.log(identity<number>(10));
console.log(identity<boolean>(true));
//const emp2

//Generic class
class Box<T> {
    private content :T;
    constructor(content:T) {
        this.content=content;
    }
    getContent():T{
        return this.content;
    }
}

let stringBox=new Box<String>("Typescript");
console.log(stringBox.getContent());

//Generic Interfaces
interface KeyValuePair<K,V>{
    key:K;
    value:V;

}

// const keyvaluepair:KeyValuePair<String, number>={"Aish", 100};
