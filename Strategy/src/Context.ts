import { ITextExtractorStrategy } from "./ITextExtractorStrategy";

export class Context{
    private _strategy: ITextExtractorStrategy;
    setStrategy(strategy: ITextExtractorStrategy){
        this._strategy = strategy;
    }

    executeStrategy(){
        this._strategy.extract();
    }
}