import { IMobileAlertState } from "./IMobileAlertState";

export class Vibration implements IMobileAlertState{

    alert(): void {
        console.log("Vibration");
    }
    
}