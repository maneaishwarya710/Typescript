function sortUsingSingleLoop(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            var temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    }
}
function printSortedArray(arr) {
    for (var index = 0; index < arr.length; index++) {
        console.log(arr[index]);
    }
}
var arr369 = [15, 3, 1, 15, 5, 13, 22];
sortUsingSingleLoop(arr369);
printSortedArray(arr369);
