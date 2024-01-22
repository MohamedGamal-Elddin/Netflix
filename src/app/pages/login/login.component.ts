import { Router } from '@angular/router';
import { AuthenticationService } from './../../service/authentication.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _AuthenticationService:AuthenticationService,private _Router:Router){
    if(localStorage.getItem('token') !== null){
      this._Router.navigate(['/home'])
    }
  };
  isLoading:boolean=false
  loginForm:FormGroup = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.pattern(/[a-z]{2,}[0-9]{7,}(@gmail.com)$/)]),
    password:new FormControl('',[Validators.required,Validators.required,Validators.pattern(/^[0-9]{6,}/)]),

  })


  loginFun(){
    this.isLoading=true
    this._AuthenticationService.loginService(this.loginForm.value).subscribe({
      next:(response)=> {
        this.isLoading=false
        if(response.message == 'success'){
          this._Router.navigate(['home']);
          localStorage.setItem('token',response.token);

          this._AuthenticationService.decodedToken()

        }
      },
        error:(err)=> this.isLoading=false
    })
  }
}
