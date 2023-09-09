
import { Customer } from "./customer";
import { Payment } from "./payment";
export class Appointment {
    appointmentId:number|undefined;
    location:String|undefined;
    visitType:String|undefined;
    preferredService:String|undefined;
    preferredDate:Date=new Date();
    preferredTime:String|undefined;
    customer:Customer|undefined|null;
    payment:Payment|undefined|null;
  

}
