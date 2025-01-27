import { error } from "console";

class Person{
    private _name:string;
    private _age:number;

    constructor(name, age){
        this._name=name;
        this._age=age;
    }

    public get name():string{
        return this._name;
    }

    public get age():number {
        return this._age;
    }

    public set name(nm:string){
        if (nm.length===0) {
            console.log("Name cannot be empty");
        }
        else{
            this._name=nm;
        }
    }

    public set age(ag:number){
        if (ag<0 || ag>=200) {
            throw new Error("This age is invalid")
        }
        else{
            this._age=ag;
        }
    }
}

const person=new Person("Aishwarya",21);
console.log(person.name);
console.log(person.age);

person.age=22;
person.name="";

console.log(person.age);