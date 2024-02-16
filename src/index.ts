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

    constructor() {
        this.head = null
        this.size = 0;
        this.llContainer = document.getElementById('ll-container') as HTMLDivElement;
        this.insertNodeAtIndexBtn = document.getElementById("insert-at-location") as HTMLButtonElement;
        this.insertNodeAtIndexBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const valueInput = document.getElementById(
                "insert-value-input"
            ) as HTMLInputElement;
            const value = parseInt(valueInput.value);

            const indexInput = document.getElementById(
                "insert-index-input"
            ) as HTMLInputElement;
            const index = parseInt(indexInput.value);

            this.insertAtIndex(value, index);

        });
    }

    // adds an node to the end of the list
    insertAtIndex(value: number = 69, index: number = 0) {
        const domNode = this.createLLDomNode(value)

        const children = document.getElementsByClassName("node_container");

        this.llContainer?.insertBefore(domNode, children[index - 1]);
        this.size++;
        console.log(this.size)
    };

    private createLLDomNode(value: number) {
        // Create the main container div
        const nodeContainer = document.createElement("div");
        nodeContainer.classList.add("node_container");
        // Create inner container div
        const innerContainer = document.createElement("div");
        innerContainer.classList.add("node_inner_container");
        // Create node data div
        const nodeData = document.createElement("div");
        nodeData.classList.add("node_data");
        const paragraph = document.createElement("p");
        paragraph.textContent = value.toString();
        nodeData.appendChild(paragraph);
        // Create next container div
        const nextContainer = document.createElement("div");
        nextContainer.classList.add("node_next_container");
        // Create next node div
        const nextNode = document.createElement("div");
        nextNode.classList.add("node_next");
        // Create arrow container div
        const arrowContainer = document.createElement("div");
        arrowContainer.classList.add("arrow-container");
        // Create arrow div
        const arrow = document.createElement("div");
        arrow.classList.add("arrow");
        const line = document.createElement("div");
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
    }
}

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


const ll = new LinkedList();

