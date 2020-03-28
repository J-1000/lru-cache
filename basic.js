class LRU {

    constructor(maxSize) {
        this.maxSize = maxSize;
        this.cache = {};
        this.queue = [];
    }

    get(key) {
        if (this.cache[key]) {
            this.queue.splice(this.queue.indexOf(key));
            this.queue.unshift(key);
            return this.cache[key];
        }
        return null;
    }

    put(key, value) {
        if (this.cache.hasOwnProperty(key)) {
            return;
        }
        if (this.queue.length >= this.maxSize) {
            console.log('max cache size exceeded');
            delete this.cache[this.queue.pop()];
        }
        this.cache[key] = value;
        this.queue.unshift(key);
    }

    showCache() {
        return this.cache;
    }

    showQueue() {
        return this.queue;
    }
}