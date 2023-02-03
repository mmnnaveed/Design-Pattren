import { IProduct } from "./IProduct";

export class Product implements IProduct {
    name: string;
    quantity: number;
    price: number;
  
    constructor(name: string, price: number, quantity: number = 1) {
      this.name = name;
      this.quantity = quantity;
      this.price = price;
    }
  
    display(): void {
      console.log(`Product name: ${this.name}, Quantity: ${this.quantity}, Price: ${this.price}`);
    }
  }
  