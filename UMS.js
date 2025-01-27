//User Management System
//enum UserRole
var UserRole;
(function (UserRole) {
    UserRole[UserRole["Admin"] = 0] = "Admin";
    UserRole[UserRole["Manager"] = 1] = "Manager";
    UserRole[UserRole["Employee"] = 2] = "Employee";
})(UserRole || (UserRole = {}));
//Object Creation
var newUser1 = {
    id: 101,
    name: "Aishwarya",
    email: "maneaishwarya710@gmail.com",
    role: UserRole.Admin,
    phoneNumber: "8007608632"
};
//user array
var userArray = [];
//create user function
function createUser(obj) {
    userArray.push(obj);
    console.log("User with id ".concat(obj.id, " added successfully..."));
}
//function filter user by role
function filterUserByRole(role1) {
    for (var index = 0; index < userArray.length; index++) {
        if (userArray.some(function (user) { return user.role == role1; })) {
            console.log("User found");
        }
    }
}
userArray.push(newUser1);
filterUserByRole(0);
//class Userclass
// class UserClass {
//     id:number;
//     name:string;
//     email:string;
//     role:UserRole |string;             
//     phoneNumber?:string
//     //Constructor
//     constructor(id:number,name:string,email:string,role:UserRole |string,phoneNumber:string) {
//         this.id=id,
//         this.name=name,
//         this.email=email,
//         this.role=role,              
//         this.phoneNumber=phoneNumber
//     }
//     display(): void {
//         console.log(`The value is ${this.id}`);
//     }
// }
//function create user
// function createUser(id:number,name:string,email:string,role:UserRole |string,phoneNumber:string): UserClass{
//     return new UserClass(id,name,email,role,phoneNumber);
// }
//object creation
// const newUser = createUser(101,"Aishwarya","aishwarya@gmail.com", UserRole.Admin,"9168880470");
// newUser.display();
//UserArray 
// let userArray:UserClass[]=[];
//push objects to array
// userArray.push(newUser);
//function filter user by role
// function filterUserByRole(role1:UserRole) {
//     for (let index = 0; index < userArray.length; index++) {
//         if(userArray.some((user)=>user.role==role1)){
//             console.log(user);
//         }
//     }
// }
