"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Context = void 0;
class Context {
    setStrategy(strategy) {
        this._strategy = strategy;
    }
    executeStrategy() {
        this._strategy.extract();
    }
}
exports.Context = Context;
