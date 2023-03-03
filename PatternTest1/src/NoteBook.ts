import { IElements } from "./Elements/IElements";

export class NoteBook{
    private _elements: IElements[] = new Array<IElements>();

    addElement(element: IElements){
        this._elements.push(element);
    }

    getElements(): IElements[]{
        return this._elements;
    }

}