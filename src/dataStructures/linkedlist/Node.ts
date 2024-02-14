class Node<T> {
  private element: T
  private next: T | null;

  constructor(element: T) {
    this.element = element;
    this.next = null;
  }
}

export default Node;
