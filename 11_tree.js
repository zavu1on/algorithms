const tree = [
    {
        v: 5,
        c: [
            {
                v: 10,
                c: [
                    {
                        v: 11,
                    }
                ]
            },
            {
                v: 7,
                c: [
                    {
                        v: 5,
                        c: [
                            {
                                v: 1
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        v: 5,
        c: [
            {
                v: 10
            },
            {
                v: 15
            }
        ]
    }
]

function recursiveSum(tree) {
    let sum = 0

    for (const node of tree) {
        sum += node.v

        if (node.c)
            sum += recursiveSum(node.c)
    }

    return sum
}

function iterationSum(tree) {
    let sum = 0
    let queue = [...tree]

     while (queue.length > 0) {
        const node = queue.shift()
         sum += node.v

         if (node.c) queue.push(...node.c)
     }

     return sum
}

console.log(recursiveSum(tree))
console.log(iterationSum(tree))