import { Location } from '@angular/common'
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core'
import { ActivatedRoute, Params, Router } from '@angular/router'
import { MovFavorite } from 'src/app/interfaces/movFavorite'
import { MovieApiService } from 'src/app/service/movie-api.service'

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  id:number = 0
  isLoading:boolean=false
  allCast:any= []
  @ViewChild('favorite') favoriteIcon!:ElementRef;
  @ViewChild('buttonSeeImage') buttonSeeImage!:ElementRef
  @ViewChild('buttonHideImage') buttonHideImage!:ElementRef
  @ViewChild('buttonSeeCast') buttonSeeCast!:ElementRef
  @ViewChild('buttonHideCast') buttonHideCast!:ElementRef
  images:boolean=true
  profile_path = ' https://api.themoviedb.org/3/person/6547f1021ac2927b2c80cada/images?api_key=950e9b955913922aa96709cdf2d9ab45'
  anyVideoPath = 'https://themoviedb.org/video/play?key='
  MovieVideo:string = ''
  keyPlay:string=''
  movieImages:any=[]
  anyImagePath = 'https://image.tmdb.org/t/p/original/'
  allDetails:any = {}
  isFavorite:boolean=false
  arrFavorite:any[] =[]
  defaultImage:string = 'https://st2.depositphotos.com/47577860/46278/v/450/depositphotos_462789280-stock-illustration-alert-attention-delete-icon-solid.jpg'
  constructor(private _MovieApiService:MovieApiService , private _Router:Router ,
              private _ActivatedRoute:ActivatedRoute , private _Location:Location,){

              }

  ngOnInit(): void {
    this._ActivatedRoute.params.subscribe((value:Params)=> {
          this.id = +value['id']
          // console.log(this.id);
    })
    this.getMovieDetails()
    this.getVideoFromMovie()
  }


  getMovieDetails(){
    this.isLoading=true

    this._MovieApiService.getMovieDetails(this.id).subscribe({
      next:(data)=> {
          this.allDetails =data
          console.log(data)
          this.isLoading=false

      },
    })
  }

  getImagePath(){
    if(this.allDetails.backdrop_path){
      return this.anyImagePath+this.allDetails.backdrop_path
    }else if(this.allDetails.poster_path){
      return this.anyImagePath+this.allDetails.poster_path
    }else{
      return this.defaultImage

    }
  }
  getImagesFromMovie(){
    this._MovieApiService.getImagesFromMovie(this.id).subscribe({
      next:(data)=>{
        this.movieImages = data.backdrops.splice(0,30)
        console.log(this.movieImages)

      }
    });
    this.images=false // convert button to Hide Images

  }
  hideImages(){

    this.movieImages=[];
    this.images=true; // convert button to See Images
    // this.ngOnInit()

    // this.buttonSeeImage.nativeElement.innerHTML='See Images';

  }

  getVideoFromMovie(){
    this._MovieApiService.getVideoFromMovie(this.id).subscribe({
      next:(data)=>{
        data.results.forEach((element:any) => {
            // console.log(element.key,'key')

            this.keyPlay = element.key

        })

      }
    })
  }
  getCastMovie(){
    this._MovieApiService.getCastMovie(this.id).subscribe(data=>{
      console.log(data.cast)
      this.allCast = data.cast
    });
    this.buttonSeeCast.nativeElement.style.display = 'none'
    this.buttonHideCast.nativeElement.style.display = 'inline-block'

  }
  hideCast(){
    this.allCast=[];
    this.buttonSeeCast.nativeElement.style.display = 'inline-block'
    this.buttonHideCast.nativeElement.style.display = 'none'

  }
  addToFavorite(){
    this.favoriteIcon.nativeElement.style.color = 'red';

    const moviesFavorite:any[] = localStorage.getItem('moviesFavoriteStorage')?JSON.parse(localStorage.getItem('moviesFavoriteStorage')||''):[]
    const moviesFavoriteObject:MovFavorite =        //save movie in variable
    {
      original_title:this.allDetails.original_title,
      poster_path : this.allDetails.poster_path,
      id:this.allDetails.id,
      release_date:this.allDetails.release_date,
      overview:this.allDetails.overview,
      backdrop_path:this.allDetails.backdrop_path,
      original_language:this.allDetails.original_language,
      tagline:this.allDetails.tagline,
      vote_average:this.allDetails.vote_average,
      genres:this.allDetails.genres,
      runtime:this.allDetails.runtime,
    }

    moviesFavorite.push(moviesFavoriteObject)
    localStorage.setItem('moviesFavoriteStorage',JSON.stringify(moviesFavorite));



  }




}
