//array
var numbers = [];
numbers.push(12);
console.log(numbers);
numbers.pop();
console.log(numbers);
//array as a tuple
var person = ["Alice", 30];
console.log(person);
//Object
var user = { id: 2122000489, username: "Aishwarya" };
console.log(user);
//Union
var unionVar;
unionVar = "Nita";
unionVar = 89;
console.log(unionVar);
var myLocation = {
    city: "Kolhapur",
    postalCode: 416213,
    latitude: 78,
    logitude: 88
};
console.log(myLocation);
var dir;
dir = "down";
console.log(dir);
var user1 = {
    id: 202,
    name: "Ramesh",
    age: 78
};
console.log(user1);
var a1 = {
    color: "green",
    noOfLegs: 4
};
var emp1 = {
    name: "richa",
    id: 1002
};
console.log(emp1);
//enum
var Status;
(function (Status) {
    Status[Status["Active"] = 0] = "Active";
    Status[Status["Inactive"] = 1] = "Inactive";
    Status[Status["Pending"] = 2] = "Pending";
})(Status || (Status = {}));
var currStatus = Status.Inactive;
console.log(currStatus);
var Status1;
(function (Status1) {
    Status1["admin"] = "admin";
})(Status1 || (Status1 = {}));
var curr1Status = Status1.admin;
console.log(curr1Status);
//functions in ts
function add(a, b) {
    return a + b;
}
console.log(add(7, 56));
function sub(a, b) {
    if (b === void 0) { b = 900; }
    return a - b; //if you want to keep earlier then last should 
} //atleast defaulted to 0
console.log(sub(56));
// function sub(a:number=90, b:number):number {                    
//     return a-b;                                                  
// }                                                               
// console.log(sub(56)); //error
function div(c, a, b) {
    if (a === void 0) { a = 90; }
    return c * a * b; //if you want to keep earlier then last should 
} //atleast defaulted to 0
console.log(div(56, undefined, 34));
