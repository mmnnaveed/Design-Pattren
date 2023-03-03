import { IElements } from "./IElements";


export class TextElement implements IElements{

    private _text: string;

    constructor(text: string){
        this._text = text;
    }
    getElement(): string {
        return this._text;
    }

}