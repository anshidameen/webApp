import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/model/appointment';
import { AppointmentService } from 'src/app/service/appointment.service';
import { Customer } from 'src/app/model/customer';
import { Payment } from 'src/app/model/payment';
import { formatDate } from '@angular/common';
import { FormGroup,FormControl,FormBuilder,Validators, AbstractControl } from '@angular/forms';
@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

   appointment:Appointment=new Appointment();
   appointmentForm:FormGroup=new FormGroup({});
   format:any='MM-dd-yyyy';
   local:any='en-US';
   formatdate:any;
   message:String|undefined;
   errorMessage:String|undefined;
   submitted:Boolean=false;
  constructor(
    private appointmentService:AppointmentService,
    private formBuilder:FormBuilder
  ) { }

 
  ngOnInit(): void {
      this.initialiseForm();
  } 
  
   initialiseForm():void{
     this.appointmentForm=this.formBuilder.group({
        location:['', [Validators.required,
                       Validators.pattern('^[a-zA-Z ]*$'), 
                       Validators.maxLength(20),
                       Validators.minLength(2)]],
        visitType:['', [Validators.required,
                       Validators.pattern('^[a-zA-Z ]*$'), 
                       Validators.maxLength(20),
                       Validators.minLength(2)]],
        preferredService:['', [Validators.required,
                          Validators.pattern('^[a-zA-Z ]*$'), 
                          Validators.maxLength(20),
                          Validators.minLength(2)]],
        preferredDate:['',[Validators.required]],
        preferredTime:['', [Validators.required,
                           ]]
      });
   }
  
   get formData(){
     return this.appointmentForm.controls;
   }

   onSubmit():void{
     this.appointment.customer=null;
     this.appointment.payment=null;
     this.formatdate=formatDate(this.appointment.preferredDate,this.format,this.local);
     this.appointment.preferredDate=this.formatdate;
     this.submitted=true;
    if(this.appointmentForm.invalid){
        return;
     }
     else{
      this.addAppointment();
     }
    
   }

   public addAppointment():void{
     this.appointmentService.addAppointment(this.appointment).subscribe(
       (data)=>
       {
        console.log("data"+data);
        this.message="Appointment Created";
        this.errorMessage=undefined;
       },
       (error)=>
       {
        console.log("error"+JSON.stringify(error));
        this.message=undefined
        this.errorMessage=error.errors();
        
       }
     )
   }
}
