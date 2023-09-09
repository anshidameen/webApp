import { Component, OnInit } from '@angular/core'; 
import { FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';
import { Login } from 'src/app/model/login';
import { LoginService } from 'src/app/service/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:Login=new Login(); 
  msg:String|undefined;
  errorMsg:String|undefined;
  constructor(private loginService:LoginService,private router:Router,private formBuilder:FormBuilder){}

  onSignup():void{
    this.router.navigate(['/registration']);
  }
   loginForm:any;
  ngOnInit():void{
    this.loginForm=new FormGroup({
      "username":new FormControl(null,[Validators.required,Validators.email]),
      "Password":new FormControl(null,[Validators.required,Validators.minLength(4)])
    });
    
  }
  get form(){
    return this.loginForm.controls;
  }
  submitData(){
    console.log(this.loginForm.value);
    this.signin();
  }
  get Username(){
   return this.loginForm.get('username')
  }
  get password(){
    return this.loginForm.get('Password')
  }
  
  signin(){
    alert("inside login"+JSON.stringify(this.login));
    this.loginService.signin(this.login)
                  .subscribe
                  (
                    (data)=>
                    {
                      console.log("data"+data);
                      this.msg="login success";
                      this.errorMsg= undefined;
                      this.router.navigate(['/']);
                      localStorage.setItem('userData',JSON.stringify(data));
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
