const graph = {}
graph.a = ['b', 'c']
graph.b = ['f']
graph.c = ['d', 'e']
graph.d = ['f']
graph.e = ['f']
graph.f = ['g']

function differentWays(graph, start, end) {
    const count = {}
    const queue = [...graph[start]]

    Object.keys(graph).forEach(node => {
        count[node] = 0
    })
    count[start] = 1

    while (queue.length > 0) {
        const curNode = queue.shift()
        const sumArray = []

        Object.entries(graph).forEach(el => {
            const [key, value] = el

            if (value.includes(curNode)) {
                sumArray.push(count[key])
            }
        })

        count[curNode] = sumArray.reduce((a, b) => a + b, 0)

        queue.push(...(graph[curNode] || []))
    }

    return count[end]
}

console.log(differentWays(graph, 'a', 'g'))