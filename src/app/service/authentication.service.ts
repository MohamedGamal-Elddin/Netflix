
import { RegisterInterface } from './../interfaces/register-interface';
import { LoginInterface } from './../interfaces/login-interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  exist:boolean = true;
  userData = new BehaviorSubject(null)  /* put in it information about token */
  // BaseUrl:string = 'https://ecommerce.routemisr.com';  /* using environment (the new )*/
  constructor(private _HttpClient:HttpClient) {
    if(localStorage.getItem('token') !== null){
      let dataStorage:any=localStorage.getItem('token')
      this.userData.next(dataStorage)
    }
  }

  registerService(_RegisterInterface:RegisterInterface):Observable<any>{
    return this._HttpClient.post( `${environment.BaseUrl}/api/v1/auth/signup`,_RegisterInterface)

  }
  loginService(_LoginInterface:LoginInterface):Observable<any>{
    return this._HttpClient.post(`${environment.BaseUrl}/api/v1/auth/signin`,_LoginInterface)

  }


  decodedToken(){

    let incoded:any = localStorage.getItem('token');
    let decoded:any = jwtDecode(incoded)
    this.userData.next(decoded)
    // console.log(this.userData);

  }
}
