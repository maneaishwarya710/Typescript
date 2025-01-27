//1.class decorator
function LogClass(constructor: Function) {
    console.log("Class decorator called");
}

//2.Method Decorator
function LogMethod(target: any, propertyKey: string, descriptor?: PropertyDescriptor):void {
    console.log("Method:"+propertyKey);
}

//3.Accessor decorator
function LogAccessor(target:Object, propertyKey:string,descriptor:PropertyDescriptor) {
    console.log("Decorator")
}

//4.Property decorator
function LogProperty(target:Object, propertyKey:string){
    console.log(`property ${String(propertyKey)} has been decorated`);
}

//5.Parameter Decorator
function LogParameter(target:Object, propertyKey:string, parameterIndex:number) {
    console.log("Value Added");
}


@LogClass
class MyClass {
    name:string;
    constructor(name:string) {
        this.name=name;
    }

    @LogMethod
    greet(@LogParameter name:string) {
        console.log("Hello, world!");
    }
}

const myInstance = new MyClass("Aishwarya");
myInstance.greet("Aishwarya");

