class Stack<T> {
    private items: T[] = []

    constructor(...items: T[]) {
        items = [...items]
    }

    push(item: T) {
        this.items.push(item)
    };

    pop() {
        return this.items.pop();
    };

    peek() {
        return this.items[this.items.length - 1];
    };

    isEmpty() {
        return this.items.length >= 1 ? false : true
    };

    print() {
        let s = "";
        for (let i = 0; i < this.items.length; i++) {
            s += `${this.items[i]}`
        }
        return s;
    }

}

function getAStack() {
    const amount = Math.floor(Math.random() * 12);

    const stack = new Stack<number>()

    for (let i = 1; i <= amount; i++) {
        stack.push(i)
    }

    return stack;
}

const myStack = getAStack();

myStack.print()