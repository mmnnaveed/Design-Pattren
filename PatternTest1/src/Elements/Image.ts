
export class Image {
    private _data: string;
    private _type: string;

    constructor(data: string, type: string ) {
        this._data = data;
        this._type = type;
    }
    getImage(): string{
        return this._type.concat(this._data);
    }
}