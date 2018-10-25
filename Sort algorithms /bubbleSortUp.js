let arr = [12, 2, 45, 6, 32, 357, 24, 6346, 123, 75],
    newArr = [];

var bubbleSort = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j + 1] > arr[j]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
};

console.log(bubbleSort(arr));
