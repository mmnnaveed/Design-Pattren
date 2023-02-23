import { Canvas } from "./Canvas";
import { CanvasHistory } from "./CanvasHistory";

const canvas = new Canvas();
const history = new CanvasHistory();

canvas.addShape({x: 11, y: 12,color: "red"});
const h = history.addState(canvas.getState());
console.log("After First ",h[0].getState());

canvas.addShape({x: 21, y: 22,color: "Green"});
const h2 =history.addState(canvas.getState());
console.log("After second ",h2[0].getState());
canvas.addShape({x: 21, y: 22,color: "Yellow"});
canvas.addShape({x: 21, y: 22,color: "Pink"});
canvas.addShape({x: 21, y: 22,color: "blue"});
console.log("second ",canvas.getState());
const h3 = history.addState(canvas.getState());
console.log("After Third ",h3[0].getState());
// canvas.setState(history.undo().getState());

console.log("First ",history.getHistory()[0].getState());
console.log("2nd ",history.getHistory()[1].getState());
console.log("3rd ",history.getHistory()[2].getState());
