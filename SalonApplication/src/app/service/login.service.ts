import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../model/login';
import{HttpClient}from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(private httpClient:HttpClient) { }
  public signin(login:Login):Observable<any>{

    console.log("inside login"+ JSON.stringify(login));
    return this.httpClient.post("http://localhost:8088/signin",login,{responseType:'text'})
    
  }
  public change(login:Login):Observable<any>{
    console.log("inside login"+ JSON.stringify(login));
    return this.httpClient.put("http://localhost:8088/changePassword",login,{responseType:'text'})
  }
  public signout(login:Login):Observable<any>{
    console.log("inside signout"+ JSON.stringify(login));
    return this.httpClient.put("http://localhost:8088/signout",login,{responseType:'text'})
  }
  
}
