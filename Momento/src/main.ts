import { Canvas } from "./Canvas";
import { CanvasHistory } from "./CanvasHistory";

const canvas = new Canvas();
const history = new CanvasHistory();

canvas.addShape({x: 11, y: 12,color: "red"});
history.addState(canvas.getState());

canvas.addShape({x: 21, y: 22,color: "Green"});
history.addState(canvas.getState());
canvas.addShape({x: 21, y: 22,color: "Yellow"});
canvas.addShape({x: 21, y: 22,color: "Pink"});
canvas.addShape({x: 21, y: 22,color: "blue"});
console.log("second ",canvas.getState());
history.addState(canvas.getState());


