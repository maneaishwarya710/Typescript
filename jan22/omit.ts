interface User{
    name:string;
    id:number;
    age:number;
} 

type UserPreview1=Omit<User,"name"|"id">;

const newUser2:UserPreview1={age:19};

console.log(newUser2)