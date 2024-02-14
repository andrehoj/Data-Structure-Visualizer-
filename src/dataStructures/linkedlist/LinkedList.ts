import Node from "./Node.js";

class LinkedList<T> {
  private head: T | null;
  private size: number;

  constructor() {
    this.head = null;
    this.size = 0;
  }

  // adds an element at the end
  // of list
  append(element: T) {
    // creates a new node
    let node = new Node(element);

    // to store current node
    let current;

    // if list is Empty add the
    // element and make it head
    if (this.head == null) this.head = node;

    else {
      current = this.head;

      // iterate to the end of the
      // list
      while (current.next) {
        current = current.next;
      }

      // add node
      current.next = node;
    }
    this.size++;
  }

  // insert element at the position index
  // of the list
  insertAt(element, index) {
    if (index < 0 || index > this.size)
      return console.log("Please enter a valid index.");
    else {
      // creates a new node
      let node = new Node(element);
      let current, previous;

      current = this.head;

      // add the element to the
      // first index
      if (index == 0) {
        node.next = this.head;
        this.head = node;
      } else {
        current = this.head;
        let iterator = 0;

        // iterate over the list to find
        // the position to insert
        while (iterator < index) {
          iterator++;
          previous = current;
          current = current.next;
        }

        // adding an element
        node.next = current;
        previous.next = node;
      }

      this.size++;
    }
  }

  // removes an element from the
  // specified location
  removeFrom(index) {
    if (index < 0 || index >= this.size)
      return console.log("Please Enter a valid index");

    let current = this.head,
      previous = current,
      iterator = 0;

    // deleting first element
    if (index === 0) {
      this.head = current.next;
    } else {
      // iterate over the list to the
      // position to remove an element
      while (iterator < index) {
        iterator++;
        previous = current;
        current = current.next;
      }

      // remove the element
      previous.next = current.next;
    }
    this.size--;

    // return the remove element
    return current.element;
  }

  // removes a given element from the
  // list
  removeElement(element) {
    let current = this.head;
    let previous = null;

    // iterate over the list
    while (current != null) {
      // comparing element with current
      // element if found then remove the
      // and return true
      if (current.element === element) {
        // if previous == null, that means we are at the first element(head)
        // in the list
        if (previous == null) {
          this.head = current.next;
        } else {
          // otherwise we just get rid of the current link
          previous.next = current.next;
        }
        this.size--;
        return current.element;
      }
      // iterate in next elements
      previous = current;
      current = current.next;
    }

    return -1;
  }

  // finds the index of element
  indexOf(element) {
    let count = 0;
    let current = this.head;

    // iterate over the list
    while (current != null) {
      // compare each element of the list
      // with given element
      if (current.element === element) return count;
      count++;
      current = current.next;
    }

    // not found
    return -1;
  }

  // checks the list for empty
  isEmpty() {
    return this.size === 0;
  }

  // prints the size of the list
  size_of_list() {
    console.log(this.size);
  }

  // prints the list items
  printList() {
    let current = this.head;
    let str = "";
    while (current) {
      str += current.element + " ";
      current = current.next;
    }

    console.log(str);
  }
}

export default LinkedList;
