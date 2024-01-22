import  {jwtDecode}  from 'jwt-decode';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../service/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private _Router:Router,private _AuthenticationService:AuthenticationService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(localStorage.getItem('token') != null ){
      try {
        jwtDecode(localStorage.getItem('token') || "")
        return true
      } catch (error) {
        console.log('fake token');
        this._Router.navigate(['/login']);
        localStorage.removeItem('token')
        return false

      }

    }else{
      this._Router.navigate(['/login'])
      return false
    }
  }

}
