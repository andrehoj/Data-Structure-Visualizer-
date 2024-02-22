interface item {
    [key: string]: any;
}


class Dictionary {
    items: item = {}

    set(key: string, value: any) {
        return this.items[key] = value;
    }

    remove(key: string) {
        if (this.has(key)) {
            delete this.items[key]
            return true
        }
        return false;
    };

    has(key: string) {
        return key in this.items;
    }

    get(key: string) {
        return this.items[key]
    }

    clear() {
        return this.items = {};
    }
    size() {
        const items = [];

        for (const key in this.items) {
            items.push(this.items[key])
        };
        return items.length;
    }

    keys() {
        const keys = [];

        for (const key in this.items) {
            if (this.has(key)) {
                keys.push(key)
            }
        };
        return keys
    }

    values() {
        const values = [];

        for (const key in this.items) {
            if (this.has(key)) {
                values.push(this.items[key])
            }
        };
        return values
    }
};

const map = new Dictionary();