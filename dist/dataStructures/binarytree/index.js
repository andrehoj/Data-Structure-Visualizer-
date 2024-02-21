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
    BinarySearchTree.prototype.findMinValue = function () {
        var currentEdge = this.root;
        if (currentEdge) {
            while (currentEdge && currentEdge.left !== null) {
                currentEdge = currentEdge.left;
            }
            return currentEdge.key;
        }
        else {
            return null;
        }
    };
    BinarySearchTree.prototype.findMaxValue = function () {
        var currentEdge = this.root;
        if (currentEdge) {
            while (currentEdge && currentEdge.right !== null) {
                currentEdge = currentEdge.right;
            }
            return currentEdge.key;
        }
        else {
            return null;
        }
    };
    BinarySearchTree.prototype.findValue = function (key) {
        return this.searchEdge(this.root, key);
    };
    ;
    BinarySearchTree.prototype.searchEdge = function (edge, key) {
        if (edge === null) {
            return false;
        }
        if (edge.key) {
            if (key > edge.key) {
                return this.searchEdge(edge.right, key);
            }
            else if (key < edge.key) {
                return this.searchEdge(edge.left, key);
            }
            else {
                return true;
            }
        }
        return false;
    };
    BinarySearchTree.prototype.removeEdge = function (parentEdge, key) {
        if (parentEdge === null) {
            return null;
        }
        if (parentEdge.key) {
            if (key < parentEdge.key) {
                parentEdge.left = this.removeEdge(parentEdge.left, key);
            }
            else if (key > parentEdge.key) {
                parentEdge.right = this.removeEdge(parentEdge.right, key);
            }
            else {
                if (parentEdge.left === null) {
                    return parentEdge.right;
                }
                else if (parentEdge.right === null) {
                    return parentEdge.left;
                }
                parentEdge.key = this.findMinValue(parentEdge.right);
                parentEdge.right = this.removeEdge(parentEdge.right, parentEdge.key);
            }
        }
        return parentEdge;
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
bst.removeEdge(bst.root, 18);
bst.traverseTree();
export { BinarySearchTree };
