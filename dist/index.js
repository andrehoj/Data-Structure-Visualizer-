"use strict";
var addNodeBtnStart = document.getElementById("insert-node-start");
var addNodeBtnEnd = document.getElementById("insert-node-end");
var linkedListContainer = document.getElementById("ll-container");
var LLNode = /** @class */ (function () {
    function LLNode(val) {
        this.value = val;
        this.next = null;
    }
    return LLNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        var _this = this;
        this.head = null;
        this.size = 0;
        this.llContainer = document.getElementById('ll-container');
        this.insertNodeAtIndexBtn = document.getElementById("insert-at-location");
        this.insertNodeAtIndexBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            var valueInput = document.getElementById("insert-value-input");
            var value = parseInt(valueInput.value);
            var indexInput = document.getElementById("insert-index-input");
            var index = parseInt(indexInput.value);
            _this.insertAtIndex(value, index);
        });
    }
    // adds an node to the end of the list
    LinkedList.prototype.insertAtIndex = function (value, index) {
        var _a;
        if (value === void 0) { value = 69; }
        if (index === void 0) { index = 0; }
        var domNode = this.createLLDomNode(value);
        var children = document.getElementsByClassName("node_container");
        (_a = this.llContainer) === null || _a === void 0 ? void 0 : _a.insertBefore(domNode, children[index - 1]);
        this.size++;
        console.log(this.size);
    };
    ;
    LinkedList.prototype.createLLDomNode = function (value) {
        // Create the main container div
        var nodeContainer = document.createElement("div");
        nodeContainer.classList.add("node_container");
        // Create inner container div
        var innerContainer = document.createElement("div");
        innerContainer.classList.add("node_inner_container");
        // Create node data div
        var nodeData = document.createElement("div");
        nodeData.classList.add("node_data");
        var paragraph = document.createElement("p");
        paragraph.textContent = value.toString();
        nodeData.appendChild(paragraph);
        // Create next container div
        var nextContainer = document.createElement("div");
        nextContainer.classList.add("node_next_container");
        // Create next node div
        var nextNode = document.createElement("div");
        nextNode.classList.add("node_next");
        // Create arrow container div
        var arrowContainer = document.createElement("div");
        arrowContainer.classList.add("arrow-container");
        // Create arrow div
        var arrow = document.createElement("div");
        arrow.classList.add("arrow");
        var line = document.createElement("div");
        line.classList.add("line");
        // Append elements to their respective parents
        arrowContainer.appendChild(arrow);
        arrowContainer.appendChild(line);
        nextNode.appendChild(arrowContainer);
        nextContainer.appendChild(nextNode);
        innerContainer.appendChild(nodeData);
        innerContainer.appendChild(nextContainer);
        nodeContainer.appendChild(innerContainer);
        return nodeContainer;
    };
    return LinkedList;
}());
// function createLinkedListNode(data: number) {
//     // Create the main container div
//     const nodeContainer = document.createElement("div");
//     nodeContainer.classList.add("node_container");
//     // Create inner container div
//     const innerContainer = document.createElement("div");
//     innerContainer.classList.add("node_inner_container");
//     // Create node data div
//     const nodeData = document.createElement("div");
//     nodeData.classList.add("node_data");
//     const paragraph = document.createElement("p");
//     paragraph.textContent = data.toString();
//     nodeData.appendChild(paragraph);
//     // Create next container div
//     const nextContainer = document.createElement("div");
//     nextContainer.classList.add("node_next_container");
//     // Create next node div
//     const nextNode = document.createElement("div");
//     nextNode.classList.add("node_next");
//     // Create arrow container div
//     const arrowContainer = document.createElement("div");
//     arrowContainer.classList.add("arrow-container");
//     // Create arrow div
//     const arrow = document.createElement("div");
//     arrow.classList.add("arrow");
//     const line = document.createElement("div");
//     line.classList.add("line");
//     // Append elements to their respective parents
//     arrowContainer.appendChild(arrow);
//     arrowContainer.appendChild(line);
//     nextNode.appendChild(arrowContainer);
//     nextContainer.appendChild(nextNode);
//     innerContainer.appendChild(nodeData);
//     innerContainer.appendChild(nextContainer);
//     nodeContainer.appendChild(innerContainer);
//     return nodeContainer;
// }
// addNodeBtnEnd?.addEventListener("click", function (e) {
//     e.stopPropagation();
//     const node = createLinkedListNode(Math.floor(Math.random() * 999));
//     const childNodes = document.getElementById("ll-container")?.childNodes;
//     if (childNodes?.length)
//         linkedListContainer?.insertBefore(node, childNodes[childNodes?.length - 2]);
// });
// addNodeBtnStart?.addEventListener("click", (e) => {
//     e.stopPropagation();
//     const node = createLinkedListNode(Math.floor(Math.random() * 999));
//     const firstChild = document.getElementById("ll-container")?.childNodes[2];
//     linkedListContainer?.insertBefore(node, firstChild as ChildNode);
// });
// insertNodeAtIndexBtn?.addEventListener("click", (e) => {
//     e.stopPropagation();
//     const valueInput = document.getElementById(
//         "insert-value-input"
//     ) as HTMLInputElement;
//     const value = parseInt(valueInput.value);
//     const indexInput = document.getElementById(
//         "insert-index-input"
//     ) as HTMLInputElement;
//     const index = parseInt(indexInput.value);
//     insertNodeAtIndex(index, value);
// });
// function insertNodeAtIndex(index: number, value: number) {
//     const node = createLinkedListNode(value);
//     const childNodes = document.getElementById("ll-container")?.children;
//     if (childNodes) linkedListContainer?.insertBefore(node, childNodes[index]);
// }
var ll = new LinkedList();
