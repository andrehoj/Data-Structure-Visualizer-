"use strict";
var ArySortingClass = /** @class */ (function () {
    function ArySortingClass(length) {
        this.ary = [];
        if (length) {
            this.fillAry(length);
        }
        this.length = this.ary.length;
    }
    ArySortingClass.prototype.printAry = function () { console.log(this.ary.join(" ")); return this; };
    ArySortingClass.prototype.fillAry = function (lng) {
        this.ary = [];
        for (var i = lng; i > 0; i--) {
            this.ary.push(i);
        }
        return this;
    };
    ArySortingClass.prototype.swap = function (indexOne, indexTwo) {
        var temp = this.ary[indexOne];
        this.ary[indexOne] = this.ary[indexTwo];
        this.ary[indexTwo] = temp;
    };
    ArySortingClass.prototype.bubbleSort = function () {
        for (var i = 0; i < this.length; i++) {
            // - i: because we dont need to visit the last element since we know its sorted 
            for (var x = 0; x < this.length - 1 - i; x++) {
                if (this.ary[x] > this.ary[x + 1]) {
                    this.swap(x, x + 1);
                }
                ;
            }
        }
        return this;
    };
    ArySortingClass.prototype.selectionSort = function () {
        var minIndex;
        for (var i = 0; i < this.length - 1; i++) {
            minIndex = i;
            for (var x = i; x < this.length; x++) {
                if (this.ary[minIndex] > this.ary[x]) {
                    minIndex = x;
                }
                ;
            }
            if (i !== minIndex)
                this.swap(i, minIndex);
        }
        return this;
    };
    ArySortingClass.prototype.insertionSort = function () {
        // [12, 11, 13, 5 , 6]
        var j, temp;
        for (var i = 0; i < this.length; i++) {
            j = i;
            temp = this.ary[i];
            while (j > 0 && this.ary[j - 1] > temp) {
                this.ary[j] = this.ary[j - 1];
                j--;
            }
            this.ary[j] = temp;
        }
        return this;
    };
    ArySortingClass.prototype.heapSort = function () { };
    ArySortingClass.prototype.quickSort = function () { };
    ArySortingClass.prototype.MergeSort = function () { };
    return ArySortingClass;
}());
console.log('hello');
new ArySortingClass(8).printAry().insertionSort().printAry();
//# sourceMappingURL=index.js.map