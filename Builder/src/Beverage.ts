export class Beverage {
    private _water: number;
    private _milk: number;
    private _sugar: number;
    private _beverageQuantity: number;
    private _beverageName: string;
    
    public get water(): number {
        return this._water;
    }
    public set water(value: number) {
        this._water = value;
    }
    public get milk(): number {
        return this._milk;
    }
    public set milk(value: number) {
        this._milk = value;
    }
    public get sugar(): number {
        return this._sugar;
    }
    public set sugar(value: number) {
        this._sugar = value;
    }
    public get beverageQuantity(): number {
        return this._beverageQuantity;
    }
    public set beverageQuantity(value: number) {
        this._beverageQuantity = value;
    }

    public get beverageName(): string {
        return this._beverageName;
    }
    public set beverageName(value: string) {
        this._beverageName = value;
    }
}