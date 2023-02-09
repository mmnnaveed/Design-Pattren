import { ITextExtractorStrategy } from "./ITextExtractorStrategy";

export class IronExtracor implements ITextExtractorStrategy{
    extract(): void {
       console.log("called Iron");
    }
}