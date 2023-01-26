"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayIterator = void 0;
class ArrayIterator {
    constructor(array) {
        this._array = new Array();
        this._array = array;
        this._position = 0;
    }
    current() {
        return this._array[this._position];
    }
    next() {
        this._position < this._array.length && this._position++;
    }
    hasNext() {
        return this._position < this._array.length;
    }
}
exports.ArrayIterator = ArrayIterator;
