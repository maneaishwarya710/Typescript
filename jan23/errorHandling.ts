// let a=10;
// let b=0;

// try {
//     if(b==0)
//         throw new Error("Cannot divide by zero");
// } catch (error) {
//     console.log(error as Error);
// }finally{
//     console.log("cleaning up resources");
// }

let arr:number[]=[1,2,3];

try {
    console.log(arr[3])
    throw new Error();
} catch (error) {
    if(error instanceof SyntaxError){
        console.log("Syntax Error")
    }
    else if(error instanceof RangeError){
        console.log("Range Error");
    }
}