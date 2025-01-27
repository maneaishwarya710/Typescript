//User Management System

//enum UserRole
enum UserRole{
    Admin,
    Manager,
    Employee
}

//interface User
interface User{
    id:number,
    name:string,
    email:string,
    role:UserRole |string,              //Allowed role field to accept custom role strings
    phoneNumber?:string
}

//Object Creation
const newUser1:User={
    id:101,
    name:"Aishwarya",
    email:"maneaishwarya710@gmail.com",
    role:UserRole.Admin,              
    phoneNumber:"8007608632"
}

//user array
let userArray:User[]=[];

//create user function
function createUser(obj:User) : User{
    userArray.push(obj);
    console.log(`User with id ${obj.id} added successfully...`)
    return obj;
}

//function filter user by role
function filterUserByRole(role1:UserRole|string):User[] {
    let filteredArray:User[]=[];
    for (let index = 0; index < userArray.length; index++) {
        if(userArray.some((user)=>user.role==role1)){
            filteredArray.push(userArray[index]);
        }
        
    }
    return filteredArray;
}

userArray.push(newUser1);
filterUserByRole(0);










