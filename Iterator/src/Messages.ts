import { ArrayIterator } from "./ArrayIterator";

export class Messages{
    private _messages: Array<string>
    constructor(){
        this._messages = new Array<string>();
    }

    public push(message: string){
        this._messages.push(message);
    }

    public pop(): string{
        return this._messages.pop();
    }

    public createIterator(){
        return new ArrayIterator<string>(this._messages);
    }
}