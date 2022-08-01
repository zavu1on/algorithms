const arr = [2, 4, 3, 5, 5, 4, 2, 3, 2, 3, 1]

function countSort(array) {
    // O(N + K)

    const max = Math.max(...array)
    const min = Math.min(...array)
    const countLength = max - min + 1 // K
    const count = new Array(countLength).fill(0)

    for (const el of array) {
        count[el - min]++
    }

    let position = 0
    for (let val = 0; val < countLength; val++) {
        for (let j = 0; j < count[val]; j++) {
            arr[position] = val + min
            position++
        }
    }

    return arr
}

console.log(countSort(arr))
