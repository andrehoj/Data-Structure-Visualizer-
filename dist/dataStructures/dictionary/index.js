"use strict";
var Dictionary = /** @class */ (function () {
    function Dictionary() {
        this.items = {};
    }
    Dictionary.prototype.set = function (key, value) {
        return this.items[key] = value;
    };
    Dictionary.prototype.remove = function (key) {
        if (this.has(key)) {
            delete this.items[key];
            return true;
        }
        return false;
    };
    ;
    Dictionary.prototype.has = function (key) {
        return key in this.items;
    };
    Dictionary.prototype.get = function (key) {
        return this.items[key];
    };
    Dictionary.prototype.clear = function () {
        return this.items = {};
    };
    Dictionary.prototype.size = function () {
        var items = [];
        for (var key in this.items) {
            items.push(this.items[key]);
        }
        ;
        return items.length;
    };
    Dictionary.prototype.keys = function () {
        var keys = [];
        for (var key in this.items) {
            if (this.has(key)) {
                keys.push(key);
            }
        }
        ;
        return keys;
    };
    Dictionary.prototype.values = function () {
        var values = [];
        for (var key in this.items) {
            if (this.has(key)) {
                values.push(this.items[key]);
            }
        }
        ;
        return values;
    };
    return Dictionary;
}());
;
var map = new Dictionary();
//# sourceMappingURL=index.js.map