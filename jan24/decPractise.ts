//1
function LoggerDecorator(logMsg:string){
    console.log("LoggerDec");
    function Logger(target:Function){
        console.log("Logger fun called");
        // console.log(logMsg);
        // console.log(target);
    }
    return Logger;
}

function Template(template:string, elementId:string ){
    console.log("Template Dec");
    return function(target:any){
        console.log("template dec fun");
        const user=new target();
        const container=document.getElementById(elementId)!;
        if(container){
            container.innerHTML=template;
        }
        const h2=container.querySelector('h2');
        if(h2){
            h2.innerText="HI"+user.name;
        }
    }
}


@LoggerDecorator('This is custom Logger...')    //called at runtime
@Template('<p>This is dynamic paragraph</p>','container')
class User {
    name:string='Aishwarya';
    age:number=21;
    constructor() {
        console.log("User class constructor called...");
    }
}

// const user=new User();