const addNodeBtnStart = document.getElementById("insert-node-start");
const addNodeBtnEnd = document.getElementById("insert-node-end");
const linkedListContainer = document.getElementById("ll-container");

interface NodeType {
    value: number;
    next: null | NodeType
}

class LLNode implements NodeType {
    value: number
    next: null | NodeType;

    constructor(val: number) {
        this.value = val
        this.next = null
    }
}

class LinkedList {
    head: LLNode | null
    size: number
    llContainer
    insertNodeAtIndexBtn: HTMLElement
    removeNodeBtn: HTMLButtonElement
    sizeDisplay: HTMLSpanElement
    constructor() {
        this.head = null
        this.removeNodeBtn = $("#remove-node-btn")[0] as HTMLButtonElement
        this.sizeDisplay = $("#size-display")[0] as HTMLSpanElement;
        // Select all elements with class name 'node_container' inside the div with id 'll-container'
        // Selecting llContainer using jQuery
        this.llContainer = $("#ll-container")[0] as HTMLDivElement; // Using [0] to access the first element in the jQuery object as a plain DOM element
        // Selecting insertNodeAtIndexBtn using jQuery
        this.insertNodeAtIndexBtn = $("#insert-at-location")[0]; // Using [0] to access the first element in the jQuery object as a plain DOM element
        this.size = $(this.llContainer).children('.node_container').length
        this.sizeDisplay.textContent = this.size.toString();

        // Adding event listener using jQuery
        $(this.insertNodeAtIndexBtn).on('click', (e) => {
            e.stopPropagation();
            const valueInput = $("#insert-value-input");
            const value = parseInt(valueInput.val() as string);
            const indexInput = $("#insert-index-input");
            const index = parseInt(indexInput.val() as string);
            this.insertAtIndex(value, index);
        });

        $(this.removeNodeBtn).on("click", (e) => {
            try {
                e.stopPropagation();
                const byIndex = parseInt($("#remove-index-input").val() as string)
                const byValue = parseInt($("#remove-value-input").val() as string)

                if (byIndex) this.removeFrom(byIndex)
                if (byValue) this.removeElement(byValue)


            } catch (error) {
                console.log(error)
            }
        })
    }

    updateSize() {
        this.sizeDisplay.textContent = this.size.toString();
    }


    // adds an node to the end of the list
    insertAtIndex(value: number, index: number) {
        if (!value) throw new Error("Invalid value")
        try {
            if (index >= 2) {
                this.walkthroughAnimation(index, () => {
                    const domNode = this.createLLDomNode(value);
                    const nodesInLL = $(this.llContainer).children('.node_container');
                    // // if length is 2, there is only head and tail
                    if (nodesInLL.length === 0) {
                        $(this.llContainer).children().first().after(domNode);
                    } else {
                        if (index < 0 || index > this.size + 1) throw new Error("invalid linkedList index");
                        $(this.llContainer.children[index === 0 ? 1 : index]).before(domNode);
                    }
                    this.size++
                    this.updateSize()
                })
            } else {
                const domNode = this.createLLDomNode(value);
                const nodesInLL = $(this.llContainer).children('.node_container');
                // // if length is 2, there is only head and tail
                if (nodesInLL.length === 0) {
                    $(this.llContainer).children().first().after(domNode);
                } else {
                    if (index < 0 || index > this.size + 1) throw new Error("invalid linkedList index");
                    $(this.llContainer.children[index === 0 ? 1 : index]).before(domNode);
                }
                this.size++
                this.updateSize()
            }
        } catch (error) {
            console.log(error)
        }

    };


    walkthroughAnimation(insertionIndex: number, insertNode: () => void) {
        // Select all sibling elements
        var $siblings = $(".walkthrough-animation");
        let stopAnimation = false
        // Iterate over each sibling element
        $siblings.each(function (animationIndex) {
            if (insertionIndex - 1 === animationIndex) {
                stopAnimation = true

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
                        console.log("insertionIndex = " + (insertionIndex - 1))
                        console.log("animationIndex = " + (animationIndex + 1))
                        if (insertionIndex - 1 === animationIndex + 1) {

                            insertNode()
                        }
                    });

                });
            }
        });

    }

    removeElement(elementValue: number) {
        var foundElement = $(this.llContainer).find("*:contains('" + elementValue + "')").filter(function () {
            return $(this).children().length === 0; // Filter to select only the innermost elements
        });
        console.log(foundElement.parent().parent().parent().remove())
        this.size--;
        this.updateSize()
    }


    removeFrom(index: number) {

        if (!index) return;

        if (index > 0) {
            const llChildren = $(this.llContainer).children();

            if (llChildren.length <= 2 || index > this.size) throw new Error("there are no nodes inserted yet")

            $(this.llContainer).children().eq(index).remove();

            this.size--
            this.updateSize()
        }
    }

    private createLLDomNode(value: number) {
        // Create the main container div
        const nodeContainer = $("<div>").addClass("node_container walkthrough-animation");
        // Create inner container div
        const innerContainer = $("<div>").addClass("node_inner_container");
        // Create node data div
        const nodeData = $("<div>").addClass("node_data");
        const paragraph = $("<p>").text(value.toString());
        nodeData.append(paragraph);
        // Create next container div
        const nextContainer = $("<div>").addClass("node_next_container");
        // Create next node div
        const nextNode = $("<div>").addClass("node_next");
        // Create arrow container div
        const arrowContainer = $("<div>").addClass("arrow-container");
        // Create arrow div
        const arrow = $("<div>").addClass("arrow");
        const line = $("<div>").addClass("line");
        // Append elements to their respective parents
        arrowContainer.append(arrow, line);
        nextNode.append(arrowContainer);
        nextContainer.append(nextNode);
        innerContainer.append(nodeData, nextContainer);
        nodeContainer.append(innerContainer);
        return nodeContainer;
    }
}
const ll = new LinkedList();
