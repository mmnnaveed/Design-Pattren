import { IMobileAlertState } from "./IMobileAlertState";

export class Silent implements IMobileAlertState{
    
    alert(): void {
        console.log("Silent");
    }
    
}