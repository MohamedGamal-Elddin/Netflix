import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovieApiService {
  baseUrl = 'https://api.themoviedb.org/3/';
  apiKey = '950e9b955913922aa96709cdf2d9ab45';
  anyImagePath = 'https://image.tmdb.org/t/p/original/';
  defaultImage:string = 'https://st2.depositphotos.com/47577860/46278/v/450/depositphotos_462789280-stock-illustration-alert-attention-delete-icon-solid.jpg'
  allFavoriteMovies:any[] =[];
  countFavorite:BehaviorSubject<number> = new BehaviorSubject(0);

  constructor(private _HttpClient:HttpClient) {
    this.getCount().subscribe(res=>{
      // this.countFavorite.next(res.c)
    })
  }


  setCount(c:number){
    return this.countFavorite.next(c)
  }
  getCount():Observable<number>{
    return this.countFavorite.asObservable()
  }



  bannerFun():Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}trending/all/week?api_key=${this.apiKey}`)
  }
  getTrendingMovies(page:number):Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}trending/movie/week?api_key=${this.apiKey}&page=${page}`)
  }
  getTrendingMoviesAction():Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}discover/movie?api_key=${this.apiKey}&with_genres=28`)
  }
  getTrendingMoviesAdventure():Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}discover/movie?api_key=${this.apiKey}&with_genres=12`)
  }
  getTrendingMoviesAnimation():Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}discover/movie?api_key=${this.apiKey}&with_genres=16`)
  }
  getTrendingMoviesComedy():Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}discover/movie?api_key=${this.apiKey}&with_genres=35`)
  }
  getTrendingMoviesDocumentary():Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}discover/movie?api_key=${this.apiKey}&with_genres=99`)
  }
  getTrendingMoviesScience():Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}discover/movie?api_key=${this.apiKey}&with_genres=878`)
  }
  getTrendingMoviesThriller():Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}discover/movie?api_key=${this.apiKey}&with_genres=53`)
  }




  getMoviesFromSearching(name:string):Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}search/movie?query=${name}&api_key=${this.apiKey}&language=en-US&page=1&include_adult=false`)
  }
  getMovieDetails(id:number):Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}movie/${id}&language=en-US?api_key=${this.apiKey}`)
  }
  getImagesFromMovie(id:number):Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}movie/${id}/images?api_key=${this.apiKey}`)
  }
  getVideoFromMovie(id:number):Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}movie/${id}/videos?api_key=${this.apiKey}`)
  }
  getCastMovie(id:number):Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}movie/${id}/credits?api_key=${this.apiKey}`)
  }
  getPopularPeople(page:number):Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}person/popular?api_key=${this.apiKey}&page=${page}`)
  }
  getPopularPeopleDetails(person_id:number):Observable<any>{
    return this._HttpClient.get(`${this.baseUrl}person/${person_id}?api_key=${this.apiKey}`)
  }
}





