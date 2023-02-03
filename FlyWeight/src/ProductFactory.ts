import { IProduct } from "./IProduct";
import { Product } from "./Product";

export class ProductFactory {
    private products: { [key: string]: IProduct } = {};
  
    getProduct(name: string, price: number): IProduct {
      if (!this.products[name]) {
        this.products[name] = new Product(name, price);
      } else {
        this.products[name].quantity++;
      }
      return this.products[name];
    }
  }