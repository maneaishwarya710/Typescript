//typeof
// function printValue(val:string|number) {
//     if(typeof val==="string"){
//         console.log("Value is:", val.toUpperCase)
//     }
//     if(typeof val==="number"){
//         console.log("Value is:",val.toFixed);
//     }
// }
function isFish(animal) {
    return animal.swim !== undefined;
}
function handleAnimal(animal) {
    if (isFish(animal)) {
        animal.swim();
    }
    else {
        animal.fly();
    }
}
var fish = { swim: function () {
        console.log("swimming");
    }, };
isFish(fish);
handleAnimal(fish);
