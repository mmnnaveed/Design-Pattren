import { IElements } from "../Elements/IElements";
import { IExport } from "./IExport";

export class TextExport implements IExport {

    private _elements :IElements[];
    constructor(elements: IElements[]) {
        this._elements= elements;
    }
    export(): void {
        console.log("Text Exported", this._elements)
    }
}