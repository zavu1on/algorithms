class LinkedList {
    constructor() {
        this.size = 0
        this.root = null
    }

    add(value) {
        if (this.size === 0) {
            this.root = new Node(value)
            this.size += 1

            return true
        }

        let node = this.root
        while (node.next) {
            node = node.next
        }
        node.next = new Node(value)
        this.size += 1

        return true
    }

    set(index, value) {
        let i = 0
        let node = this.root

        while (node.next) {
            if (i === index) {
                node.value = value
                return true
            }

            node = node.next
            i++
        }
        if (i === index) {
            node.value = value
            return true
        }

        return false
    }

    get(index) {
        let i = 0
        let node = this.root

        while (node.next) {
            if (i === index) {
                return node.value
            }

            node = node.next
            i++
        }
        if (i === index) {
            return node.value
        }

        return null
    }

    print() {
        const result = []
        let node = this.root

        while (node.next) {
            result.push(node.value)
            node = node.next
        }
        result.push(node.value)

        console.log(`LinkedList<[${result}]>`)
    }
}

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

const list = new LinkedList()
list.add(2)
list.add(5)
list.set(1, 9)
console.log(list.get(0))
list.print()