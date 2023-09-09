import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup,Validators } from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';
import { Login } from 'src/app/model/login';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  changeForm:any;
  submitted=false;
  login:Login=new Login();
  msg:String|undefined;
  errorMsg:String|undefined;
  constructor(private formBuilder:FormBuilder,private loginService:LoginService) { }
  
  ngOnInit(): void {
    this.changeForm=this.formBuilder.group({
      userName:['',Validators.required],
      newPassword:['',[Validators.required,Validators.minLength(4),Validators.maxLength(12)]],
      confirmpassword:['',Validators.required]

    },{
      validator:this.MustMatch('newPassword','confirmpassword')
    });
  }
  get form(){
    return this.changeForm.controls;
  }
  onSubmit(){
    this.submitted=true;
    if (this.changeForm.invalid){
      return;
    }
    this.change();
  }
    change(){
      alert("inside login"+JSON.stringify(this.login));
      this.loginService.change(this.login)
                    .subscribe
                    (
                      (data)=>
                      {
                        console.log("data"+data);
                        this.msg="login success";
                        this.errorMsg= undefined;
                        
                      },
                      (error)=>
                      {
                        console.log("error:"+error.error());
                        this.errorMsg=error.error();
                        this.msg=undefined;
                      }
  
  
  
                    )
  
    }
  
  
   MustMatch(controlName:string, matchingControlName:string){
    return(formGroup:FormGroup)=>{
      const control=formGroup.controls[controlName];
      const matchingControl=formGroup.controls[matchingControlName];
      if(matchingControl.errors && !matchingControl.errors.mustMatch){
        return;
      }
      if(control.value !==matchingControl.value){
        matchingControl.setErrors({mustMatch:true});
      }
      else{
        matchingControl.setErrors(null);
      }
    }
  }
 
}
