function param(target:any, paramName:string, index:number) {
    console.log(target)
    console.log(paramName)
    console.log(index)
    console.log("Param called...")
}

function Logger(target:any, methodName:string, descriptor:PropertyDescriptor){
    console.log("Method Decorator Called...");
    console.log(methodName);
    console.log(target);
    console.log(descriptor);
}

class Person {
    name:string;

    constructor(n:string) {
        this.name=n;
    }

    @Logger
    calculateAge(@param dob:string){

    }
}

const person1=new Person("Nishant");
person1.calculateAge('05-12-2003');