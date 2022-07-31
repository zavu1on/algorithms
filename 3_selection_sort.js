const arr = [4, 5, 9, 8, 11, 49, -31, 7, 0]

function selectionSort(array) {
    // O(n^2)

    for (let i = 0; i < array.length; i++) {
        let minIndex = i

        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j
            }
        }

        const tmp = array[i]
        array[i] = array[minIndex]
        array[minIndex] = tmp
    }

    return array
}

console.log(selectionSort(arr))