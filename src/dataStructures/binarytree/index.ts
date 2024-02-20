class Edge {
    key: number | null
    left: edgeType | null
    right: edgeType | null

    constructor(key: number) {
        this.key = key
        this.right = null
        this.left = null
    }
}

type edgeType = InstanceType<typeof Edge>;

class BinarySearchTree {
    root: edgeType | null

    constructor(key: number | null = null) {
        this.root = key ? new Edge(key) : null
    }

    insert(key: number) {
        const edge = new Edge(key);

        if (this.root === null) {
            this.root = edge
        } else {
            this.insertEdge(this.root, edge)
        }
    }

    insertEdge(edge: edgeType, newEdge: edgeType) {
        if (edge.key == null || newEdge.key == null) throw new Error("edge keys must be defined");

        if (edge.key < newEdge.key) {
            // to the right we go
            if (edge.right === null) {
                edge.right = newEdge
            } else {
                this.insertEdge(edge.right, newEdge)
            }
        } else {
            // to the left we go
            if (edge.left === null) {
                edge.left = newEdge;
            } else {
                this.insertEdge(edge.left, newEdge)
            }
        }
    };

    printEdgeKey(edgeKey: number) {
        console.log(edgeKey);
    }

    inOrderTraversalNode(edge: edgeType, callBack: (key: number) => void) {
        if (edge !== null) {
            console.log('Line 58: Value of edge.key = ' + edge.key)
            this.inOrderTraversalNode(edge.left as edgeType, callBack)
            console.log('Line 60: Value of edge.key = ' + edge.key)
            callBack(edge.key as number)
            console.log('Line 62: Value of edge.key = ' + edge.key)
            this.inOrderTraversalNode(edge.right as edgeType, callBack)
        }
    };

    preOrderTraversalNode(edge: edgeType, callBack: (key: number) => void) {
        if (edge !== null) {
            callBack(edge.key as number)
            this.inOrderTraversalNode(edge.left as edgeType, callBack)
            this.inOrderTraversalNode(edge.right as edgeType, callBack)
        }
    }

    postOrderTraversalNode(edge: edgeType, callBack: (key: number) => void) {
        if (edge !== null) {
            this.inOrderTraversalNode(edge.left as edgeType, callBack)
            this.inOrderTraversalNode(edge.right as edgeType, callBack)
            callBack(edge.key as number)
        }
    }

    traverseTree(type: "preOrder" | "postOrder" | "inOrder" = "inOrder") {
        if (this.root !== null)
            switch (type) {
                case "preOrder":
                    this.preOrderTraversalNode(this.root, this.printEdgeKey)
                    break;
                case "postOrder":
                    this.postOrderTraversalNode(this.root, this.printEdgeKey)
                    break;
                default:
                    this.inOrderTraversalNode(this.root, this.printEdgeKey)
            }
    }

    findMinValue() {
        let currentEdge = this.root;
        if (currentEdge) {
            while (currentEdge && currentEdge.left !== null) {
                currentEdge = currentEdge.left;
            }
            return currentEdge.key;
        } else {
            return null;
        }
    }

    findMaxValue() {
        let currentEdge = this.root;
        if (currentEdge) {
            while (currentEdge && currentEdge.right !== null) {
                currentEdge = currentEdge.right;
            }
            return currentEdge.key;
        } else {
            return null;
        }
    }

    findValue(key: number) {
        return this.searchEdge(this.root, key)
    };

    searchEdge(edge: edgeType | null, key: number): boolean {
        if (edge === null) {
            return false;
        }

        if (edge.key) {
            if (key > edge.key) {
                return this.searchEdge(edge.right, key)
            } else if (key < edge.key) {
                return this.searchEdge(edge.left, key)
            } else { return true; }
        }

        return false;
    }
}

const bst = new BinarySearchTree(10);

bst.insert(12)
bst.insert(8)
bst.insert(14)
bst.insert(6)
bst.insert(16)
bst.insert(4)
bst.insert(18)


export { BinarySearchTree }