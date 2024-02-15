const addNodeBtnStart = document.getElementById("insert-node-start")
const addNodeBtnEnd = document.getElementById("insert-node-end")
const listLengthSpan = document.getElementById("list-length")

const linkedListContainer = document.getElementById("content");

function createLinkedListNode() {
    // Create the main container div with class "node"
    const mainContainer = document.createElement('div');
    mainContainer.classList.add('node');

    // Create the div for holding data with class "node-data"
    const dataContainer = document.createElement('p');
    dataContainer.textContent = 'data'; // Add the inner content

    // Create the div for the next node with class "node-next"
    const nextContainer = document.createElement('div');
    nextContainer.classList.add('node-next');

    const arrowContainer = document.createElement("div");
    const line = document.createElement("div");
    line.classList.add('line')
    const arrow = document.createElement("div");
    arrow.classList.add('arrow')
    arrowContainer.classList.add("arrow-container")
    arrowContainer.appendChild(line)
    arrowContainer.appendChild(arrow)

    // Append the data container and next container to the main container
    mainContainer.appendChild(dataContainer);
    mainContainer.appendChild(nextContainer);
    mainContainer.appendChild(arrowContainer);

    return mainContainer
}

addNodeBtnEnd?.addEventListener("click", function (e) {
    e.stopPropagation()
    const node = createLinkedListNode()
    const childNodes = document.getElementById("content")?.childNodes

    if (childNodes?.length) linkedListContainer?.insertBefore(node, childNodes[childNodes?.length - 2])
})

addNodeBtnStart?.addEventListener("click", (e) => {
    e.stopPropagation();
    const node = createLinkedListNode();

    const firstChild = document.getElementById("content")?.childNodes[2]
    linkedListContainer?.insertBefore(node, firstChild as ChildNode)
})


function insertNodeAtIndex(index: number) {
    
}