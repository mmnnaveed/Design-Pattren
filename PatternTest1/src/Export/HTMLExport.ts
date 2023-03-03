import { IElements } from "../Elements/IElements";
import { IExport } from "./IExport";

export class HTMLExport implements IExport {
    private _elements: IElements[];

    constructor(elements: IElements[]) {
        this._elements = elements;
    }

    export(): void {
        console.log("HTML Exported", this._elements);
    }
}