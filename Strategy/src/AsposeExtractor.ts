import { ITextExtractorStrategy } from "./ITextExtractorStrategy";

export class AsposeExtracor implements ITextExtractorStrategy{
    extract(): void {
       console.log("called Aspose");
    }
}