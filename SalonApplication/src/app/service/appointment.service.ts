import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Appointment } from '../model/appointment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(
    private httpClient:HttpClient
  ) { }

  public addAppointment(appointment:Appointment):Observable<any>{
    return this.httpClient.post("http://localhost:8088/salon/Appointment/add",
       appointment,{responseType:'text'});
  }
 
  public getAllAppointments():Observable<any>{
    return this.httpClient.get("http://localhost:8088/salon/Appointment/getAll");
  }
}
