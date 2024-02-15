const addNodeBtnStart = document.getElementById("insert-node-start")
const addNodeBtnEnd = document.getElementById("insert-node-end")
const listLengthSpan = document.getElementById("list-length")

const linkedListContainer = document.getElementById("content");

function createLinkedListNode(data: number) {
    // Create the main container div
    const nodeContainer = document.createElement('div');
    nodeContainer.classList.add('node_container');

    // Create inner container div
    const innerContainer = document.createElement('div');
    innerContainer.classList.add('node_inner_container');

    // Create node data div
    const nodeData = document.createElement('div');
    nodeData.classList.add('node_data');
    const paragraph = document.createElement('p');
    paragraph.textContent = data;
    nodeData.appendChild(paragraph);

    // Create next container div
    const nextContainer = document.createElement('div');
    nextContainer.classList.add('node_next_container');

    // Create next node div
    const nextNode = document.createElement('div');
    nextNode.classList.add('node_next');

    // Create arrow container div
    const arrowContainer = document.createElement('div');
    arrowContainer.classList.add('arrow-container');

    // Create arrow div
    const arrow = document.createElement('div');
    arrow.classList.add('arrow');
    const line = document.createElement('div');
    line.classList.add('line');

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

addNodeBtnEnd?.addEventListener("click", function (e) {
    e.stopPropagation()
    const node = createLinkedListNode(Math.floor(Math.random() * 999))
    const childNodes = document.getElementById("content")?.childNodes

    if (childNodes?.length) linkedListContainer?.insertBefore(node, childNodes[childNodes?.length - 2])
})

addNodeBtnStart?.addEventListener("click", (e) => {
    e.stopPropagation();
    const node = createLinkedListNode(Math.floor(Math.random() * 999));

    const firstChild = document.getElementById("content")?.childNodes[2]
    linkedListContainer?.insertBefore(node, firstChild as ChildNode)
})


function insertNodeAtIndex(index: number) {

}