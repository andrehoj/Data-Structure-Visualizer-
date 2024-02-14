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

    // Append the data container and next container to the main container
    mainContainer.appendChild(dataContainer);
    mainContainer.appendChild(nextContainer);

    return mainContainer
}

addNodeBtnEnd?.addEventListener("click", function (e) {
    e.stopPropagation()
    const node = createLinkedListNode()
    linkedListContainer?.appendChild(node)
})

addNodeBtnStart?.addEventListener("click", (e) => {
    e.stopPropagation();
    const node = createLinkedListNode();

    const firstChild = document.getElementById("content")?.childNodes[1]

    linkedListContainer?.insertBefore(node, firstChild as ChildNode)

})

