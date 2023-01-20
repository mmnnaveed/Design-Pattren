import { Beverage } from "./Beverage";
import { BeverageBuilder } from "./BeverageBuilder";

const beverageBuilder: BeverageBuilder = new BeverageBuilder(new Beverage());
const beverage = beverageBuilder.setWater(1).setMilk(1).setSugar(2).setBeverageName("Tea").setBeverageQuantity(2).build();
console.log(beverage);

