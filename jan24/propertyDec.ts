import { error } from "console";

function Capitalize(target:any, propertyKey:string):any{
    console.log("CAPITALIZE FUNCTION CALLED");
    let value:string;

    const getter=function(){
        return value.charAt(0).toUpperCase()+value.slice(1).toLowerCase;
    }

    const setter=function(newValue:string){
        value=newValue.toLowerCase();
    }

    return{
        get:getter,
        set:setter
    }
}

function AccessLogger(target:any, name:string, descriptor:PropertyDescriptor){
    const getter=descriptor.get;
    const setter=descriptor.set;

    descriptor.get=function(){
        console.log(`accessing value for property ${name}...`);
        if(getter){
            return getter.call(this);
        }
        return undefined;
    }

    descriptor.set=function(value:number){
        console.log(`setting value for property: ${name}...`);
        if(setter){
            setter.call(this, value);
        }
    }

    return descriptor;
}

class Product {
    @Capitalize
    name:string;
    private _price:number;
    constructor(name:string, price:number) {
        this.name=name;
        this._price=price;
    }

    @AccessLogger
    get price(){
        return this._price;
    }

    set price(value:number){
        if(value>0){
            this._price=value;
        }else{
            throw new Error("Price should be greater than 0");
        }
    }
}

const p=new Product('red', 12222);
p.price=3000;
console.log(p.price);
