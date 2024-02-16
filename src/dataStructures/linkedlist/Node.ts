export interface nodetype {
  element: number;
  next: nodetype | null;
}

class Node implements nodetype {
  element: number;
  next: nodetype | null;

  constructor(element: number) {
    this.element = element;
    this.next = null;
  }
}

export default Node;
