import { IMobileAlertState } from "./IMobileAlertState";

export class MobileAlert{
    private _mobileAlertState: IMobileAlertState;

    public get state(): IMobileAlertState {
        return this._mobileAlertState;
    }

    public set state(value: IMobileAlertState) {
        this._mobileAlertState = value;
    }

    public alert(){
        this._mobileAlertState.alert();
    }
}