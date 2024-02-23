class ArySortingClass {
    private ary: number[] = [];
    private length: number

    constructor(length?: number) {
        if (length) {
            this.fillAry(length)
        }
        this.length = this.ary.length;
    }

    printAry() { console.log(this.ary.join(" ")); return this }

    fillAry(lng: number) {
        this.ary = [];

        for (let i = lng; i > 0; i--) {
            this.ary.push(i);
        }
        return this;
    }

    swap(indexOne: number, indexTwo: number) {
        const temp = this.ary[indexOne];
        this.ary[indexOne] = this.ary[indexTwo]
        this.ary[indexTwo] = temp;
    }

    bubbleSort() {
        for (let i = 0; i < this.length; i++) {
            // - i: because we dont need to visit the last element since we know its sorted 
            for (let x = 0; x < this.length - 1 - i; x++) {
                if (this.ary[x] > this.ary[x + 1]) {
                    this.swap(x, x + 1)
                };
            }
        }
        return this
    }

    selectionSort() {
        let minIndex;

        for (let i = 0; i < this.length - 1; i++) {
            minIndex = i;

            for (let x = i; x < this.length; x++) {
                if (this.ary[minIndex] > this.ary[x]) {
                    minIndex = x
                };
            }
            if (i !== minIndex) this.swap(i, minIndex as number)
        }
        return this;
    }

    insertionSort() { }

    heapSort() { }

    quickSort() { }

    MergeSort() { }
}

new ArySortingClass(8).printAry().selectionSort().printAry();