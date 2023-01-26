"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Messages = void 0;
const ArrayIterator_1 = require("./ArrayIterator");
class Messages {
    constructor() {
        this._messages = new Array();
    }
    push(message) {
        this._messages.push(message);
    }
    pop() {
        return this._messages.pop();
    }
    createIterator() {
        return new ArrayIterator_1.ArrayIterator(this._messages);
    }
}
exports.Messages = Messages;
