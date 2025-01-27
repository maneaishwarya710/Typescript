function lastEle(arr) {
    return arr.length > 0 ? arr[arr.length - 1] : undefined;
}
var strings = ["a", "b", "c"];
var lastStr = lastEle(strings);
console.log(lastStr);
