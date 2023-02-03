"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductFactory = void 0;
const Product_1 = require("./Product");
class ProductFactory {
    constructor() {
        this.products = {};
    }
    getProduct(name, price) {
        if (!this.products[name]) {
            this.products[name] = new Product_1.Product(name, price);
        }
        else {
            this.products[name].quantity++;
        }
        return this.products[name];
    }
}
exports.ProductFactory = ProductFactory;
