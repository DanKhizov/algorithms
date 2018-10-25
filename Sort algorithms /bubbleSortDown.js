let arr = [12, 2, 45, 6, 32, 357, 24, 6346, 123, 75],
    newArr = [];

function bubbleSort(arr) {
    var length = arr.length;

    for (var i = 0; i < length; i++) {
        for (var j = 0; j < length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort(arr));
