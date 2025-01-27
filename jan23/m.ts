//typeof
// function printValue(val:string|number) {
//     if(typeof val==="string"){
//         console.log("Value is:", val.toUpperCase)
//     }
//     if(typeof val==="number"){
//         console.log("Value is:",val.toFixed);
//     }
// }

// printValue("Ravi");

//instanceof

//custom gaurds
//param is Type
interface Fish{
    swim():void;
}

interface Bird{
    fly():void;
}

function isFish(animal:Fish|Bird):animal is Fish {
    return(animal as Fish).swim!==undefined;
}

function handleAnimal(animal:Fish|Bird) {
    if(isFish(animal)){
        animal.swim();
    }
    else{
        animal.fly();
    }
}

const fish:Fish={swim() {
    console.log("swimming")
},}

isFish(fish);
handleAnimal(fish);

//"the never type represents the type of values that never occur."
//"Variables also acquire the type never when narrowed by any type guards that can never be true"