function factorial(n) {
    // O(n)
    if (n === 1) return 1

    return factorial(n - 1) * n
}

function cashFunction(callback) {
    const cash = {}

    return (...args) => {
        if (cash[args]) {
            console.log('Достали из кеша:', cash[args])
            return cash[args]
        }

        const res = callback(...args)
        cash[args] = res

        return res
    }
}

cashedFactorial = cashFunction(factorial)

console.log(cashedFactorial(10))
console.log(cashedFactorial(5))
console.log(cashedFactorial(10))
