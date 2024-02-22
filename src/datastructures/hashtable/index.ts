import { LinkedList } from "../singlylinkedlist/LinkedList.js"

// using seperate chaining
// ll uses a number for value
class HashTable {
    table: any[] = []

    get(key: string) {
        const position = this.loseloseHash(key);

        if (this.table[position] !== undefined) {
            let currentNode = this.table[position].getHead()

            while (currentNode.next) {
                if (currentNode.element.key === key) {
                    return currentNode.element.key;
                }
                currentNode = currentNode.next;
            }

            if (currentNode.element.key === key) {
                return currentNode.element.key;
            }

        }
        return undefined;
        }

    put(key: string, value: any) {
        const position = this.loseloseHash(key)
        if (this.table[position] === undefined) {
            this.table[position] = new LinkedList()
        };

        this.table[position].append(value)
    }

    remove(key: string) {
        return this.table[this.loseloseHash(key)] = undefined;
    }

    loseloseHash(key: string) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }

        return hash % 37;
    }
}