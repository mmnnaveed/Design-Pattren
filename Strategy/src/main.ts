import { AsposeExtracor } from "./AsposeExtractor";
import { Context } from "./Context";
import { IronExtracor } from "./IronExtractor";

const context = new Context();
context.setStrategy(new IronExtracor());

context.executeStrategy();
context.setStrategy(new AsposeExtracor());

context.executeStrategy();