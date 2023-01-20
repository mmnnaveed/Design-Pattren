import { IMobileAlertState } from "./src/IMobileAlertState";
import { MobileAlert } from "./MobileAlert";
import { Silent } from "./Silent";

export class Vibration implements IMobileAlertState{
    private _mobileAlert: MobileAlert;

    constructor(mobileAlert: MobileAlert){
        this._mobileAlert = mobileAlert;
    }
    alert(): void {
        console.log("Vibration");
        this._mobileAlert.state = new Silent(this._mobileAlert);
    }
    
}