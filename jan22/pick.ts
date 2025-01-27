interface User{
    name:string;
    id:number;
    age:number;
} 

type UserPreview=Pick<User,"name"|"id">;

const newUser8:UserPreview={name:"Kavya",id:22};

console.log(newUser8)