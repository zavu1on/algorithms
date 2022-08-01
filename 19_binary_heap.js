class BinaryHeap {
    constructor() {
        this.root = null
    }

    add(value, root = this.root) {
        if (!this.root) {
            this.root = new Node(value)
            return true
        }

        let node = root
        const newNode = new Node(value)

        while (node) {
            if (value >= node.value) {
                const prevValue = node.value
                node.value = value
                return this.add(prevValue, node)
            }

            if (!node.right) {
                break
            } else {
                if (value >= node.right.value) {
                    const prevValue = node.right.value
                    node.right.value = value
                    return this.add(prevValue, node)
                }

                if (!node.left && value < node.right.value) {
                    break
                }

                if (value >= node.left.value) {
                    const prevValue = node.left.value
                    node.left.value = value
                    return this.add(prevValue, node)
                }

                if (value > node.left.value) {
                    node = node.right
                } else {
                    node = node.left
                }
            }
        }

        if (!node.right) {
            node.right = newNode
            return true
        }
        if (!node.left && value < node.right.value) {
            node.left = newNode
            return true
        }
    }

    print(root = this.root, prefix = 'Root', nest = 0) {
        if (!root) {
            return true
        }
        console.log(prefix, root.value, 'Nest', nest)
        this.print(root.right, 'Right', nest + 1)
        this.print(root.left, 'Left', nest + 1)
    }
}

class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

const tree = new BinaryHeap()
tree.add(10)
tree.add(8)
tree.add(6)
tree.add(5)
tree.add(4)
tree.add(7)
tree.add(9)
tree.print()
