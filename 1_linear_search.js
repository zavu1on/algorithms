const arr = [-31, 0, 4, 5, 7, 8, 9, 11, 49]

function linearSearch(array, item) {
    // O(n)

    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) return i
    }

    return -1
}

console.log(linearSearch(arr, 5))