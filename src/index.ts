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
    llContainer: HTMLDivElement
    insertNodeAtIndexBtn: HTMLElement
    sizeDisplay: HTMLSpanElement
    constructor() {
        this.head = null
        this.size = 0;
        this.sizeDisplay = $("#size-display")[0] as HTMLSpanElement;
        this.sizeDisplay.textContent = this.size.toString();
        // Select all elements with class name 'node_container' inside the div with id 'll-container'
        // Selecting llContainer using jQuery
        this.llContainer = $("#ll-container")[0] as HTMLDivElement; // Using [0] to access the first element in the jQuery object as a plain DOM element
        // Selecting insertNodeAtIndexBtn using jQuery
        this.insertNodeAtIndexBtn = $("#insert-at-location")[0]; // Using [0] to access the first element in the jQuery object as a plain DOM element

        // Adding event listener using jQuery
        $(this.insertNodeAtIndexBtn).on('click', (e) => {
            e.stopPropagation();
            const valueInput = $("#insert-value-input");
            const value = parseInt(valueInput.val() as string);
            const indexInput = $("#insert-index-input");
            const index = parseInt(indexInput.val() as string);
            this.insertAtIndex(value, index);
        });
    }

    updateSize() {
        this.size++;
        this.sizeDisplay.textContent = this.size.toString();
    }

    // adds an node to the end of the list
    insertAtIndex(value: number, index: number) {
        if (!value) throw new Error("Invalid value")
        try {
            const domNode = this.createLLDomNode(value);
            const nodesInLL = $(this.llContainer).children('.node_container');;
            // // if length is 2, there is only head and tail
            if (nodesInLL.length === 0) {
                $(this.llContainer).children().first().after(domNode);
            } else {
                if (index < 0 || index > this.size + 1) throw new Error("invalid linkedList index");
                $(this.llContainer.children[index === 0 ? 1 : index]).before(domNode);
            }

            this.updateSize()
        } catch (error) {
            console.log(error)
        }

    };

    removeElement() { }
    removeFrom() { }

    private createLLDomNode(value: number) {
        // Create the main container div
        const nodeContainer = $("<div>").addClass("node_container");
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
