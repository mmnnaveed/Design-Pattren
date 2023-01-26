import { MobileAlert } from "./MobileAlert";
import { Silent } from "./Silent";
import { Vibration } from "./Vibration";

const mobileAlert = new MobileAlert();
mobileAlert.state =  new Silent();
mobileAlert.alert();
mobileAlert.state =  new Vibration();
mobileAlert.alert();

