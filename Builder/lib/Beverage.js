"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Beverage = void 0;
class Beverage {
    get water() {
        return this._water;
    }
    set water(value) {
        this._water = value;
    }
    get milk() {
        return this._milk;
    }
    set milk(value) {
        this._milk = value;
    }
    get sugar() {
        return this._sugar;
    }
    set sugar(value) {
        this._sugar = value;
    }
    get beverageQuantity() {
        return this._beverageQuantity;
    }
    set beverageQuantity(value) {
        this._beverageQuantity = value;
    }
    get beverageName() {
        return this._beverageName;
    }
    set beverageName(value) {
        this._beverageName = value;
    }
}
exports.Beverage = Beverage;
