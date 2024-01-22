import { AuthenticationService } from './../../service/authentication.service';
import { Component } from '@angular/core';
import {FormGroup , FormControl , Validators} from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
  constructor(private _AuthenticationService:AuthenticationService , private _Router:Router){
    if(localStorage.getItem('token') !== null ){
      _Router.navigate(['/home'])
    }
    }
  isLoading:boolean = false;
  apiError!:string ;

  registerForm:FormGroup = new FormGroup({
    name:new FormControl('',[Validators.required , Validators.minLength(3),Validators.maxLength(10),Validators.pattern(/^[a-z]{3,}$/)]),
    email:new FormControl('',[Validators.required,Validators.pattern(/[a-z]{2,}[0-9]{7,}(@gmail.com)$/)]),
    password:new FormControl('',[Validators.required,Validators.required,Validators.pattern(/^[0-9]{6,}/)]),
    rePassword:new FormControl('' ,[Validators.required]),
    phone:new FormControl('',[Validators.required,Validators.pattern(/(01)[0125][0-9]{8}$/)]),
  });

  registerFun(x:FormGroup){
    this.isLoading=true;
    if(x.valid){
      this._AuthenticationService.registerService(this.registerForm.value).subscribe({
        next:(response) => {
          this.isLoading=false;
          if(response.message == 'success'){
            this._Router.navigate(['login']);
          }
        },
        error:(err)=>{
          // console.log(err);
          this.isLoading=false;
          if(err.error.message == 'Account Already Exists'){
            this.apiError = err.error.message;
            console.log(this.apiError);
          }else{
            this.apiError = err.error.errors.msg;
            console.log(this.apiError);
          }
        }
      });
    }

  }
}
