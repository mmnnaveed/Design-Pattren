import { Iterator } from "./ITerator";

export class ArrayIterator<T> implements Iterator<T>{
    private _array = new Array<T>();
    private _position;

    constructor(array : T[]){
        this._array = array;
        this._position = 0 
    }

    current(): T {
        return this._array[this._position];
    }

    next(): void {
       this._position < this._array.length && this._position++;
    }

    hasNext(): boolean {
        return this._position < this._array.length;
    }

    
    
}