const arr = [4, 5, 9, 8, 11, 49, -31, 7, 0]

function quickSort(array) {
    // O(log n * n)

    if (array.length <= 1) return array

    const middle = Math.floor(array.length / 2)
    const middleElement = array[middle]
    const left = []
    const right = []

    for (let i = 0; i < array.length; i++) {
        if (middle === i) continue

        if (array[i] > middleElement) {
            right.push(array[i])
        } else {
            left.push(array[i])
        }
    }

    return [
        ...quickSort(left),
        middleElement,
        ...quickSort(right)
    ]
}

console.log(quickSort(arr))
