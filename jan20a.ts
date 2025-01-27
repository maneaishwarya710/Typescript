function lastEle<T>(arr: T[]): T | undefined {
    return arr.length > 0 ? arr[arr.length - 1] : undefined;
}


const strings: string[] = ["a", "b", "c"];
const lastStr = lastEle(strings); 
console.log(lastStr);




