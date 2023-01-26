"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileAlert = void 0;
class MobileAlert {
    get state() {
        return this._mobileAlertState;
    }
    set state(value) {
        this._mobileAlertState = value;
    }
    alert() {
        this._mobileAlertState.alert();
    }
}
exports.MobileAlert = MobileAlert;
