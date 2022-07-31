const graph = {}
graph.a = ['b', 'c', 'g']
graph.b = ['f']
graph.c = ['d', 'e']
graph.d = ['f', 'g']
graph.e = ['f', 'g']
graph.f = ['g']

function allWays(graph, start, end) {
    const res = []
    const queue = [start]

    while (queue.length > 0) {
        const current = queue.shift()

        if (!graph[current[current.length - 1]]) {
            graph[current[current.length - 1]] = []
        }

        if (graph[current[current.length - 1]].includes(end)) {
            res.push(current + end)

            if (graph[current[current.length - 1]].length > 1) {
                const neighbours = graph[current[current.length - 1]]

                for (let i = 0; i < neighbours.length; i++) {
                    neighbours[i] = current + neighbours[i]
                }

                queue.push(...neighbours)
            }
        } else {
            const neighbours = graph[current[current.length - 1]]

            for (let i = 0; i < neighbours.length; i++) {
                neighbours[i] = current + neighbours[i]
            }

            queue.push(...neighbours)
        }
    }

    return res
}

console.log(allWays(graph, 'a', 'g'))
