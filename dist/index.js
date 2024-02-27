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
        this.removeNodeBtn = $("#remove-node-btn")[0];
        this.sizeDisplay = $("#size-display")[0];
        // Select all elements with class name 'node_container' inside the div with id 'll-container'
        // Selecting llContainer using jQuery
        this.llContainer = $("#ll-container")[0]; // Using [0] to access the first element in the jQuery object as a plain DOM element
        // Selecting insertNodeAtIndexBtn using jQuery
        this.insertNodeAtIndexBtn = $("#insert-at-location")[0]; // Using [0] to access the first element in the jQuery object as a plain DOM element
        this.size = $(this.llContainer).children('.node_container').length;
        this.sizeDisplay.textContent = this.size.toString();
        // Adding event listener using jQuery
        $(this.insertNodeAtIndexBtn).on('click', function (e) {
            e.stopPropagation();
            var valueInput = $("#insert-value-input");
            var value = parseInt(valueInput.val());
            var indexInput = $("#insert-index-input");
            var index = parseInt(indexInput.val());
            _this.insertAtIndex(value, index);
        });
        $(this.removeNodeBtn).on("click", function (e) {
            try {
                e.stopPropagation();
                var byIndex = parseInt($("#remove-index-input").val());
                var byValue = parseInt($("#remove-value-input").val());
                if (byIndex)
                    _this.removeFrom(byIndex);
                if (byValue)
                    _this.removeElement(byValue);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    LinkedList.prototype.updateSize = function () {
        this.sizeDisplay.textContent = this.size.toString();
    };
    // adds an node to the end of the list
    LinkedList.prototype.insertAtIndex = function (value, index) {
        var _this = this;
        if (!value)
            throw new Error("Invalid value");
        try {
            if (index >= 2) {
                this.walkthroughAnimation(index, function () {
                    var domNode = _this.createLLDomNode(value);
                    var nodesInLL = $(_this.llContainer).children('.node_container');
                    // // if length is 2, there is only head and tail
                    if (nodesInLL.length === 0) {
                        $(_this.llContainer).children().first().after(domNode);
                    }
                    else {
                        if (index < 0 || index > _this.size + 1)
                            throw new Error("invalid linkedList index");
                        $(_this.llContainer.children[index === 0 ? 1 : index]).before(domNode);
                    }
                    _this.size++;
                    _this.updateSize();
                });
            }
            else {
                var domNode = this.createLLDomNode(value);
                var nodesInLL = $(this.llContainer).children('.node_container');
                // // if length is 2, there is only head and tail
                if (nodesInLL.length === 0) {
                    $(this.llContainer).children().first().after(domNode);
                }
                else {
                    if (index < 0 || index > this.size + 1)
                        throw new Error("invalid linkedList index");
                    $(this.llContainer.children[index === 0 ? 1 : index]).before(domNode);
                }
                this.size++;
                this.updateSize();
            }
        }
        catch (error) {
            console.log(error);
        }
    };
    ;
    LinkedList.prototype.walkthroughAnimation = function (insertionIndex, insertNode) {
        // Select all sibling elements
        var $siblings = $(".walkthrough-animation");
        var stopAnimation = false;
        // Iterate over each sibling element
        $siblings.each(function (animationIndex) {
            if (insertionIndex - 1 === animationIndex) {
                stopAnimation = true;
            }
            if (!stopAnimation) {
                var $currentElement = $(this);
                // Define the animation
                $currentElement.delay(animationIndex * 800).animate({
                    // Scale the element
                    "transform": "scale(1.2)", // Scale factor can be adjusted as needed
                    // Rotate the element slightly to one side
                    "rotate": "5deg" // Angle can be adjusted as needed
                }, 200, function () {
                    // Animation complete callback function
                    // Animate back to original styles
                    $currentElement.animate({
                        "transform": "scale(1)",
                        "rotate": "0deg"
                    }, 200, function () {
                        console.log("insertionIndex = " + (insertionIndex - 1));
                        console.log("animationIndex = " + (animationIndex + 1));
                        if (insertionIndex - 1 === animationIndex + 1) {
                            insertNode();
                        }
                    });
                });
            }
        });
    };
    LinkedList.prototype.removeElement = function (elementValue) {
        var foundElement = $(this.llContainer).find("*:contains('" + elementValue + "')").filter(function () {
            return $(this).children().length === 0; // Filter to select only the innermost elements
        });
        console.log(foundElement.parent().parent().parent().remove());
        this.size--;
        this.updateSize();
    };
    LinkedList.prototype.removeFrom = function (index) {
        if (!index)
            return;
        if (index > 0) {
            var llChildren = $(this.llContainer).children();
            if (llChildren.length <= 2 || index > this.size)
                throw new Error("there are no nodes inserted yet");
            $(this.llContainer).children().eq(index).remove();
            this.size--;
            this.updateSize();
        }
    };
    LinkedList.prototype.createLLDomNode = function (value) {
        // Create the main container div
        var nodeContainer = $("<div>").addClass("node_container walkthrough-animation");
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
//# sourceMappingURL=index.js.map