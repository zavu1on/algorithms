function factorial(n) {
    // O(n)
    if (n === 1) return 1

    return factorial(n - 1) * n
}

function fibonacci(n) {
    // O(2^n)
    if (n <= 2) return 1

    return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(factorial(5))
console.log(fibonacci(10))
