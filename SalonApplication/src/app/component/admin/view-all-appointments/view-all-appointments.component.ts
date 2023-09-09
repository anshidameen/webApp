import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/model/appointment';
import { AppointmentService } from 'src/app/service/appointment.service';

@Component({
  selector: 'app-view-all-appointments',
  templateUrl: './view-all-appointments.component.html',
  styleUrls: ['./view-all-appointments.component.css']
})
export class ViewAllAppointmentsComponent implements OnInit {

  message:String|undefined;
  errorMessage:String|undefined;
  appointments:Appointment[]=[];
  constructor(
    private appointmentService:AppointmentService,

  ) { }
 
  ngOnInit(): void {
   this.getAllAppointment();
  }
  
  public getAllAppointment():void{
    this.appointmentService.getAllAppointments().subscribe(
      (data)=>
      {
       this.appointments=data;   
       this.errorMessage=undefined;
      },
      (error)=>
      {
       console.log("error"+JSON.stringify(error));
       this.message=undefined
       this.errorMessage=error.error;
       
      }
    )
  
   }
}
