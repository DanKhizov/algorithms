let arr = [12, 2, 45, 6, 32, 357, 24, 6346, 123, 75],
    min = 0;

var selectionSort = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] <= arr[min]) min = j;
        }
        var temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
    return arr;
};

console.log(selectionSort(arr));
