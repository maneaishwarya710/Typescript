interface User{
    name:string;
    id:number;
    age:number;
} 

function updateUser(user:User,updates:Partial<User>):User {
    return {...user, ...updates };
}

const user1:User={name:"Aishwarya",id:2006,age:21};

const newUser=updateUser(user1, {name:"AishwaryaAvinash", id:1});
console.log(newUser);