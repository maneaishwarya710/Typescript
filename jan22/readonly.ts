interface User{
    name:string;
    id:number;
    age:number;
} 

const user2:Readonly <User>={name:"Rhea",id:34,age:37};

//user2.name="Aishwarya";        //Cannot assign to 'name' because it is a read-only property
console.log(user2);

