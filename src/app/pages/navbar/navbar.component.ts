import { MovieApiService } from 'src/app/service/movie-api.service';
import { AuthenticationService } from './../../service/authentication.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  isLogin:boolean=false;
  counterOfFavorite:number=0
  constructor(private _MovieApiService:MovieApiService, private _Router:Router , private _AuthenticationService:AuthenticationService){
    _AuthenticationService.userData.subscribe({
      next:()=>{
        if(_AuthenticationService.userData.getValue() !== null){
          this.isLogin=true
        }else{
          this.isLogin=false
        }
      },
      error:()=>{
        this.isLogin=false

      }
    })
    this._MovieApiService.getCount().subscribe(result=>this.counterOfFavorite =result);
  }

  ngOnInit(): void {


  }

  logout(){
    localStorage.removeItem('token');
    this._AuthenticationService.userData.next(null);
    this._Router.navigateByUrl('login')
  }
}
