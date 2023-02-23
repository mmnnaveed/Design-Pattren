import { CanvasMomento } from "./CanvasMomento"
import { CanvasState } from "./CanvasState";

export class CanvasHistory{
    private history: CanvasMomento[];
    constructor(){
        this.history = [];
    }

    public addState(canvasState: CanvasState){
        this.history.push(new CanvasMomento(canvasState));
        return this.history;
    }

    public undo(){
        if(this.history.length > 0){
            this.history.pop();

            return this.history[this.history.length - 1];
        }
        return null;
    }

    public getHistory(){
        return this.history;
    }
}