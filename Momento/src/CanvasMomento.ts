import { CanvasState } from "./CanvasState";

export class CanvasMomento{

    private state: CanvasState
    constructor(state: CanvasState){
        this.state = state;
    }

    getState(){
        return this.state;
    }

}