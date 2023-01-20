import { IMobileAlertState } from "./IMobileAlertState";
import { MobileAlert } from "./MobileAlert";
import { Vibration } from "./Vibration";

export class Silent implements IMobileAlertState{
    private _mobileAlert: MobileAlert;

    constructor(mobileAlert: MobileAlert){
        this._mobileAlert = mobileAlert;
    }
    alert(): void {
        console.log("Silent");
        this._mobileAlert.state = new Vibration(this._mobileAlert);
    }
    
}