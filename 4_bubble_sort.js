const arr = [4, 5, 9, 8, 11, 49, -31, 7, 0]

function bubbleSort(array) {
    // O(n^2)

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j + 1] < arr[j]) {
                const tmp = arr[j + 1]
                array[j + 1] = arr[j]
                arr[j] = tmp
            }
        }
    }

    return arr
}

console.log(bubbleSort(arr))