var Edge = /** @class */ (function () {
    function Edge(key) {
        this.key = key;
        this.right = null;
        this.left = null;
    }
    return Edge;
}());
var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree(key) {
        if (key === void 0) { key = null; }
        this.root = key ? new Edge(key) : null;
    }
    BinarySearchTree.prototype.insert = function (key) {
        var edge = new Edge(key);
        if (this.root === null) {
            this.root = edge;
        }
        else {
            this.insertEdge(this.root, edge);
        }
    };
    BinarySearchTree.prototype.insertEdge = function (edge, newEdge) {
        if (edge.key == null || newEdge.key == null)
            throw new Error("edge keys must be defined");
        if (edge.key < newEdge.key) {
            // to the right we go
            if (edge.right === null) {
                edge.right = newEdge;
            }
            else {
                this.insertEdge(edge.right, newEdge);
            }
        }
        else {
            // to the left we go
            if (edge.left === null) {
                edge.left = newEdge;
            }
            else {
                this.insertEdge(edge.left, newEdge);
            }
        }
    };
    ;
    BinarySearchTree.prototype.printEdgeKey = function (edgeKey) {
        console.log(edgeKey);
    };
    BinarySearchTree.prototype.inOrderTraversalNode = function (edge, callBack) {
        if (edge !== null) {
            this.inOrderTraversalNode(edge.left, callBack);
            callBack(edge.key);
            this.inOrderTraversalNode(edge.right, callBack);
        }
    };
    ;
    BinarySearchTree.prototype.preOrderTraversalNode = function (edge, callBack) {
        if (edge !== null) {
            callBack(edge.key);
            this.inOrderTraversalNode(edge.left, callBack);
            this.inOrderTraversalNode(edge.right, callBack);
        }
    };
    BinarySearchTree.prototype.postOrderTraversalNode = function (edge, callBack) {
        if (edge !== null) {
            this.inOrderTraversalNode(edge.left, callBack);
            this.inOrderTraversalNode(edge.right, callBack);
            callBack(edge.key);
        }
    };
    BinarySearchTree.prototype.traverseTree = function (type) {
        if (type === void 0) { type = "inOrder"; }
        if (this.root !== null)
            switch (type) {
                case "preOrder":
                    this.preOrderTraversalNode(this.root, this.printEdgeKey);
                    break;
                case "postOrder":
                    this.postOrderTraversalNode(this.root, this.printEdgeKey);
                    break;
                default:
                    this.inOrderTraversalNode(this.root, this.printEdgeKey);
            }
    };
    return BinarySearchTree;
}());
var bst = new BinarySearchTree(10);
bst.insert(12);
bst.insert(8);
bst.insert(14);
bst.insert(6);
bst.insert(16);
bst.insert(4);
bst.insert(18);
bst.traverseTree();
export { BinarySearchTree };
