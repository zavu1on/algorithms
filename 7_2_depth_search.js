const graph = {}
graph.a = ['b', 'c']
graph.b = ['f']
graph.c = ['d', 'e']
graph.d = ['f']
graph.e = ['f']
graph.f = ['g']

function depthSearch(graph, start, end) {
    const queue = [start]

    while (queue.length > 0) {
        const current = queue.pop()

        if (!graph[current]) {
            graph[current] = []
        }

        if (graph[current].includes(end)) {
            return true
        } else {
            queue.push(...graph[current])
        }
    }

    return false
}

console.log(depthSearch(graph, 'a', 'g'))