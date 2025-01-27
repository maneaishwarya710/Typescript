// import 'reflect-metadata';
//logger
//higher order functions
//Reflect.definametadata
//class inside another class
//Dependency Injection-Service injection | When your class executes-can be injected
//replacing a class
function ReplaceWithProxy<T extends {new(...args:any[]):{}}>(constructor:T) {
    return class extends constructor{
        proxyEnabled=true;
    };
}

@ReplaceWithProxy
class Order{
    constructor(public id:number, public amount:number){}
}

//const order:any=new Order(1,500);
const order=new Order(1,500) as Order &{proxyEnabled:boolean};
console.log(order.proxyEnabled);   //true