const arr1 = [1, 2, 3, 5, 7, 9, 11, 12, 19]
const arr2 = [2, 4, 6, 8, 10, 22]

function mergeSortedArrays(array1, array2) {
    const res = []
    let left = 0
    let right = 0

    while (left < array1.length || right < array2.length) {
        if (left === array1.length && right < array2.length) {
            while (right < array2.length) {
                res.push(array2[right])
                right++
            }
            break
        } else if (left < array1.length && right === array2.length) {
            while (left < array1.length) {
                res.push(array1[left])
                left++
            }
            break
        }

        if (array1[left] < array2[right]) {
            res.push(array1[left])
            left++
        } else {
            res.push(array2[right])
            right++
        }
    }

    return res
}

console.log(mergeSortedArrays(arr1, arr2))

function countPairs(array, k) {
    let count = 0
    let right = 0

    for (let left = 0; left < array.length; left++) {
        while (right < array.length && array[right] - array[left] <= k) {
            right++
        }

        count += array.length - right
    }


    return count
}

console.log(countPairs([1, 3, 5, 7, 8], 4))