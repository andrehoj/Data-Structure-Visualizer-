import { LinkedList } from "../singlylinkedlist/LinkedList.js";
// using seperate chaining
// ll uses a number for value
var HashTable = /** @class */ (function () {
    function HashTable() {
        this.table = [];
    }
    HashTable.prototype.get = function (key) {
        var position = this.loseloseHash(key);
        if (this.table[position] !== undefined) {
            var currentNode = this.table[position].getHead();
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
    };
    HashTable.prototype.put = function (key, value) {
        var position = this.loseloseHash(key);
        if (this.table[position] === undefined) {
            this.table[position] = new LinkedList();
        }
        ;
        this.table[position].append(value);
    };
    HashTable.prototype.remove = function (key) {
        return this.table[this.loseloseHash(key)] = undefined;
    };
    HashTable.prototype.loseloseHash = function (key) {
        var hash = 0;
        for (var i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % 37;
    };
    return HashTable;
}());
var table = new HashTable();
