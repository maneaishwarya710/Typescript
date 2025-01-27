// Generic function to sort an array
function sortArray(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}
// Generic function to print an array
function printArr(arr) {
    for (var index = 0; index < arr.length; index++) {
        console.log(arr[index]);
    }
}
// Example usage
var newArr1 = [243, 526, 78, 37, 7, 666, 45];
sortArray(newArr1); // Sort the array
printArr(newArr1); // Output the sorted array
