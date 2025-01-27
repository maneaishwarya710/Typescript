var greet= function(name:any){
    return "Hello,".concat(name,"!Welcome to typescript.");
};
console.log(greet("Aishwarya"));
//number
var num: number=123;
//string
var str: String="New Jersey";
//boolean
let bool:boolean=true;
//null 
let nullVar:null=null;
//undefined
let undefinedVar:undefined=undefined;
//arrays
const num2:number[]=[12,35,87];
//tuple
let newTuple:[number, string, boolean]=[23,"Aish",false];
//enum
enum Status{
    active,
    inactive,
    suspended
}
//void
function newFunction(num3:number) {
    console.log(`Entered number is:${num3}`);
}
//union--Union types in TypeScript allow a variable to hold more than one type of value
let newUnion:(string|number)=23;
//never--The never type in TypeScript represents values that never occur. It is used to indicate 
// that a function never returns or always throws an exception. 
function throwError(errMsg: string){
    throw new Error(errMsg);
}
//type alias
type Pet = 'cat' | 'dog';
//OJECT-non-primitive(in curly brackets)
// const newObj:NewObj{
//     name:string,

// }
