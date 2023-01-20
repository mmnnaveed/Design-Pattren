"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Beverage_1 = require("./Beverage");
const BeverageBuilder_1 = require("./BeverageBuilder");
const beverageBuilder = new BeverageBuilder_1.BeverageBuilder(new Beverage_1.Beverage());
const beverage = beverageBuilder.setWater(1).setMilk(1).setSugar(2).setBeverageName("Tea").setBeverageQuantity(2).build();
console.log(beverage);
