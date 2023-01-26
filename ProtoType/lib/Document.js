"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Document = void 0;
class Document {
    constructor(name, text) {
        this._name = name;
        this._text = text;
    }
    clone() {
        return Object.assign({}, this);
    }
    read() {
        console.log(this._name, this._text);
    }
}
exports.Document = Document;
