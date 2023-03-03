
import { IElements } from "./IElements";
import { Image } from "./Image";

export class ImageElement implements IElements{

    private _image: Image;

    constructor(image: Image) {
        this._image = image;
    }
    
    getElement(): Image {
        return this._image;
    }

}