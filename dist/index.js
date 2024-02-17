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
        this.sizeDisplay = $("#size-display")[0];
        this.sizeDisplay.textContent = this.size.toString();
        // Select all elements with class name 'node_container' inside the div with id 'll-container'
        // Selecting llContainer using jQuery
        this.llContainer = $("#ll-container")[0]; // Using [0] to access the first element in the jQuery object as a plain DOM element
        // Selecting insertNodeAtIndexBtn using jQuery
        this.insertNodeAtIndexBtn = $("#insert-at-location")[0]; // Using [0] to access the first element in the jQuery object as a plain DOM element
        // Adding event listener using jQuery
        $(this.insertNodeAtIndexBtn).on('click', function (e) {
            e.stopPropagation();
            var valueInput = $("#insert-value-input");
            var value = parseInt(valueInput.val());
            var indexInput = $("#insert-index-input");
            var index = parseInt(indexInput.val());
            _this.insertAtIndex(value, index);
        });
    }
    LinkedList.prototype.updateSize = function () {
        this.size++;
        this.sizeDisplay.textContent = this.size.toString();
    };
    // adds an node to the end of the list
    LinkedList.prototype.insertAtIndex = function (value, index) {
        if (!value)
            throw new Error("Invalid value");
        try {
            var domNode = this.createLLDomNode(value);
            var nodesInLL = $(this.llContainer).children('.node_container');
            ;
            // // if length is 2, there is only head and tail
            if (nodesInLL.length === 0) {
                $(this.llContainer).children().first().after(domNode);
            }
            else {
                if (index < 0 || index > this.size + 1)
                    throw new Error("invalid linkedList index");
                $(this.llContainer.children[index === 0 ? 1 : index]).before(domNode);
            }
            this.updateSize();
        }
        catch (error) {
            console.log(error);
        }
    };
    ;
    LinkedList.prototype.removeElement = function () { };
    LinkedList.prototype.removeFrom = function () { };
    LinkedList.prototype.createLLDomNode = function (value) {
        // Create the main container div
        var nodeContainer = $("<div>").addClass("node_container");
        // Create inner container div
        var innerContainer = $("<div>").addClass("node_inner_container");
        // Create node data div
        var nodeData = $("<div>").addClass("node_data");
        var paragraph = $("<p>").text(value.toString());
        nodeData.append(paragraph);
        // Create next container div
        var nextContainer = $("<div>").addClass("node_next_container");
        // Create next node div
        var nextNode = $("<div>").addClass("node_next");
        // Create arrow container div
        var arrowContainer = $("<div>").addClass("arrow-container");
        // Create arrow div
        var arrow = $("<div>").addClass("arrow");
        var line = $("<div>").addClass("line");
        // Append elements to their respective parents
        arrowContainer.append(arrow, line);
        nextNode.append(arrowContainer);
        nextContainer.append(nextNode);
        innerContainer.append(nodeData, nextContainer);
        nodeContainer.append(innerContainer);
        return nodeContainer;
    };
    return LinkedList;
}());
var ll = new LinkedList();
