import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup,Validators } from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';
import { Login } from 'src/app/model/login';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.css']
})
export class SignoutComponent implements OnInit {
  outForm:any;
  login:Login={userId:'ameenvv@gmail.com',password:'12345'};
  msg:String|undefined;
  errorMsg:String|undefined;
  constructor(private formBuilder:FormBuilder,private router:Router,private loginService:LoginService) { }
  
  ngOnInit(): void {
   
  }
  onSign(){
    this.signout();
  }
  getData(){
    //console.log("localStorage"+ JSON.stringify(localStorage.key))
    return localStorage.getItem('userData');
    
  }
  signout(){
    alert("do you want to signout"+JSON.stringify(this.login));
    this.loginService.signout(this.login)
                  .subscribe
                  (
                    (data)=>
                    {
                      console.log("data"+data);
                      this.msg="signout success";
                      this.errorMsg= undefined;
                      this.router.navigate(['/']);
                    },
                    (error)=>
                    {
                      console.log("error:"+error.error());
                      this.errorMsg=error.error();
                      this.msg=undefined;
                    }



                  )

  }
}
