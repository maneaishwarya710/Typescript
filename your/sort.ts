// Generic function to sort an array
function sortArray<T>(arr: T[]): void {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

// Generic function to print an array
function printArr<T>(arr: T[]): void {
    for (let index = 0; index < arr.length; index++) {
        console.log(arr[index]);
    }
}

// Example usage
let newArr1: number[] = [243, 526, 78, 37, 7, 666, 45];
sortArray(newArr1); // Sort the array
printArr(newArr1);  // Output the sorted array
