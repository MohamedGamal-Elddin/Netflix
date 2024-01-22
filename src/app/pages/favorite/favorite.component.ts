import { Location } from '@angular/common';
import { MovFavorite } from 'src/app/interfaces/movFavorite';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MovieApiService } from 'src/app/service/movie-api.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit{
  isLoading:boolean=false;
  favorites:MovFavorite[] = []
  words:string = '';
  path = environment.anyImagePath;
  defaultImage = environment.defaultImage;
  count:number=0
  @ViewChild('inputSearch' ,{static:true} ) myInputSearch!:ElementRef;

  constructor(private _MovieApiService:MovieApiService , private _Router:Router , private _ElementRef:ElementRef , private _Location:Location ){

  }
  ngOnInit():void{
    this.favorites = localStorage.getItem('moviesFavoriteStorage')?JSON.parse(localStorage.getItem('moviesFavoriteStorage') || '[]'):[];
    this.count = this.favorites.length;
    console.log(this.count)
    this._MovieApiService.setCount(this.count);

  }

  delete(ind:number) {
    if (ind >= 0) {
      this.favorites.splice(ind, 1);
      localStorage.setItem('moviesFavoriteStorage', JSON.stringify(this.favorites));
    }else{
      console.log('no storage');
      localStorage.removeItem('moviesFavoriteStorage')

    }

    this.ngOnInit()
  }


  getFavoriteMoviesFromSearching(){

    console.log('search');



  }

}
