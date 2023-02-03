"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(name, price, quantity = 1) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
    display() {
        console.log(`Product name: ${this.name}, Quantity: ${this.quantity}, Price: ${this.price}`);
    }
}
exports.Product = Product;
