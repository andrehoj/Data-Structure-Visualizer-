"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Stack = /** @class */ (function () {
    function Stack() {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        this.items = [];
        items = __spreadArray([], items, true);
    }
    Stack.prototype.push = function (item) {
        this.items.push(item);
    };
    ;
    Stack.prototype.pop = function () {
        return this.items.pop();
    };
    ;
    Stack.prototype.peek = function () {
        return this.items[this.items.length - 1];
    };
    ;
    Stack.prototype.isEmpty = function () {
        return this.items.length >= 1 ? false : true;
    };
    ;
    Stack.prototype.print = function () {
        var s = "";
        for (var i = 0; i < this.items.length; i++) {
            s += "".concat(this.items[i]);
        }
        return s;
    };
    return Stack;
}());
function getAStack() {
    var amount = Math.floor(Math.random() * 12);
    var stack = new Stack();
    for (var i = 1; i <= amount; i++) {
        stack.push(i);
    }
    return stack;
}
var myStack = getAStack();
myStack.print();
//# sourceMappingURL=index.js.map