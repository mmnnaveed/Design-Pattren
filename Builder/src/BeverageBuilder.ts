import { Beverage } from "./Beverage";

export class BeverageBuilder{
    beverage: Beverage;

    constructor(beverage: Beverage){
        this.beverage = beverage; 
    }

    public setWater(water: number) : BeverageBuilder {
        this.beverage.water = water;
        return this;
    }
    public setMilk(milk: number) : BeverageBuilder {
        this.beverage.milk = milk;
        return this;
    }
    public setSugar(sugar: number) : BeverageBuilder {
        this.beverage.sugar = sugar;
        return this;
    }
    public setBeverageQuantity(beverageQuantity: number) : BeverageBuilder {
        this.beverage.beverageQuantity = beverageQuantity;
        return this;
    }
    public setBeverageName(beverageName: string) : BeverageBuilder {
        this.beverage.beverageName = beverageName;
        return this;
    }
     public build() :string{
        return `Make ${this.beverage.beverageName} with gradients Water :${this.beverage.water} cup, Milk :${this.beverage.milk} cup, sugar :${this.beverage.sugar} tea spoon, Beverage quantity : ${this.beverage.beverageQuantity} spoon`
     }
}