"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BeverageBuilder = void 0;
class BeverageBuilder {
    constructor(beverage) {
        this.beverage = beverage;
    }
    setWater(water) {
        this.beverage.water = water;
        return this;
    }
    setMilk(milk) {
        this.beverage.milk = milk;
        return this;
    }
    setSugar(sugar) {
        this.beverage.sugar = sugar;
        return this;
    }
    setBeverageQuantity(beverageQuantity) {
        this.beverage.beverageQuantity = beverageQuantity;
        return this;
    }
    setBeverageName(beverageName) {
        this.beverage.beverageName = beverageName;
        return this;
    }
    build() {
        return `Make ${this.beverage.beverageName} with gradients Water :${this.beverage.water} cup, Milk :${this.beverage.milk} cup, sugar :${this.beverage.sugar} tea spoon, Beverage quantity : ${this.beverage.beverageQuantity} spoon`;
    }
}
exports.BeverageBuilder = BeverageBuilder;
