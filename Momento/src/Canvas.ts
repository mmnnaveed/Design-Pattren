import { CanvasState } from "./CanvasState";
import { IShape } from "./IShape";

export class Canvas{
    private canvasState: CanvasState;

    constructor(){
        this.canvasState = {
            shapes:[]
        }
    }

    setState(canvasState: CanvasState){
        this.canvasState = canvasState;
    }

    getState(){
        return this.canvasState;
    }

    addShape(shape: IShape){
        this.canvasState.shapes.push(shape);
    }
    
}