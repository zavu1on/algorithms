const products = [
    {
        name: 'Guitar',
        price: 1500,
        weight: 10
    },
    {
        name: 'Piano',
        price: 2000,
        weight: 20
    },
    {
        name: 'Vase',
        price: 1000,
        weight: 5
    },
    {
        name: 'Picture',
        price: 1000,
        weight: 5
    }
]

function stealProducts(products, backpackMaxWeight) {
    let weight = 0
    const backpack = []

    for (const product of products.sort((a, b) => b.price - a.price)) {
        if (product.weight + weight <= backpackMaxWeight) {
            weight += product.weight
            backpack.push(product)
        }
    }

    return backpack
}

const bp = stealProducts(products, 30)
console.log('Backpack', bp)
console.log('Total price', bp.reduce((a, b) => a + b.price, 0))
console.log('Ideal price', 4000)
console.log('Total weight', bp.reduce((a, b) => a + b.weight, 0))