const graph = {}
graph.a = {b: 2, c: 1, g: 6}
graph.b = {f: 7}
graph.c = {d: 5, e: 2}
graph.d = {f: 2}
graph.e = {f: 1}
graph.f = {g: 1}
graph.g = {}

function dijkstraAlgorithm(graph, start, end) {
    const costs = {}
    const processed = []

    Object.keys(graph).forEach(node => {
        if (node !== start) {
            const value = graph[start][node]
            costs[node] = value || 1_000_000_000
        }
    })

    let node = findNodeWithLowesCost(costs, processed)

    while (node) {
        const cost = costs[node]
        const neighbours = graph[node]

        Object.keys(neighbours).forEach(neighbour => {
            const newCost = cost + neighbours[neighbour]

            if (newCost < costs[neighbour]) {
                costs[neighbour] = newCost
            }
        })

        processed.push(node)
        node = findNodeWithLowesCost(costs, processed)
    }

    return costs[end]
}

function findNodeWithLowesCost(costs, processed) {
    let lowestCost = 1_000_000_000
    let lowestNode

    Object.keys(costs).forEach(node => {
        const cost = costs[node]

        if (cost < lowestCost && !processed.includes(node)) {
            lowestCost = cost
            lowestNode = node
        }
    })

    return lowestNode
}

console.log(dijkstraAlgorithm(graph, 'a', 'g'))