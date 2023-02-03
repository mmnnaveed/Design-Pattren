import { ProductFactory } from "./ProductFactory";

const factory = new ProductFactory();

const potatoes = factory.getProduct("Potatoes", 2.99);
const bread = factory.getProduct("Bread", 1.99);
const milk = factory.getProduct("Milk", 2.49);

potatoes.display(); 
bread.display();
milk.display(); 

const anotherBagOfPotatoes = factory.getProduct("Potatoes", 2.99);

potatoes.display(); 
