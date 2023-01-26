import { IProtoType } from "./IProtoType";

export class Document implements IProtoType{
    private _name: string;
    private _text: string;

    constructor(name: string, text: string){
        this._name = name;
        this._text = text;
    }
    clone(): this {
        return Object.assign({},this);
    }     

    read(){
        console.log(this._name, this._text);
    }
}