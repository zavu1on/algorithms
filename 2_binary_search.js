const arr = [-31, 0, 4, 5, 7, 8, 9, 11, 49]

function binarySearch(array, item) {
    // O(log n)

    let start = 0
    let end = array.length - 1

    while (start <= end) {
        const position = Math.floor((start + end) / 2)
        const element = array[position]

        if (element === item) {
            return position
        }

        if (item > element) {
            start = position + 1
        } else {
            end = position - 1
        }
    }

    return -1
}


function recursiveBinarySearch(array, item, start, end) {
    // O(log n)

    const middle = Math.floor((start + end) / 2)

    if (item === array[middle]) return middle

    if (item < array[middle]) {
        return recursiveBinarySearch(array, item, start, middle - 1)
    } else {
        return recursiveBinarySearch(array, item, middle + 1, end)

    }
}

console.log(binarySearch(arr, 4))
console.log(recursiveBinarySearch(arr, 11, 0, arr.length - 1))
