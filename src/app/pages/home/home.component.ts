import { OwlOptions } from 'ngx-owl-carousel-o';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MovieApiService } from 'src/app/service/movie-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit , AfterViewInit{
  isLoading:boolean=false;
  @ViewChild ('runVideo') myHover!:ElementRef; // when hover image play video
  allImagesTrends:any = [];
  MovieVideo:string=''
  allIDs:any = [] // all id from trending movies;
  allTrendingMovies:any = [];
  allTrendingMoviesAction:any = []
  allTrendingMoviesComedy:any = []
  allTrendingMoviesAnimation:any = []
  allTrendingMoviesScience:any = []
  allTrendingMoviesThriller:any = []
  allTrendingMoviesDocumentary:any = []
  allTrendingMoviesAdventure:any = []
  path = this._MovieApiService.anyImagePath;
  constructor(private _MovieApiService:MovieApiService, private _ElementRef:ElementRef){}
  ngAfterViewInit(): void {
    // this._ElementRef.nativeElement.color='red'
    // throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    this.bannerFun();
    this.getTrendingMovies();
    this.getTrendingMoviesComedy();
    this.getTrendingMoviesAnimation();
    this.getTrendingMoviesAction();
    this.getTrendingMoviesScience();
    this.getTrendingMoviesThriller();
    this.getTrendingMoviesAdventure();

  }

  bannerFun(){
  this.isLoading=true

  this._MovieApiService.bannerFun().subscribe((data)=>{

    this.allImagesTrends = data.results;
    console.log(data);
    this.isLoading=false


    })
  }
  getTrendingMovies(){
    this.isLoading=true
    this._MovieApiService.getTrendingMovies(1).subscribe((data)=>{
        this.allTrendingMovies = data.results;
        console.log(data);
        this.isLoading=false
    });

  }
  getTrendingMoviesAction(){
    this.isLoading=true
    this._MovieApiService.getTrendingMoviesAction().subscribe((data)=>{
        this.allTrendingMoviesAction = data.results;
        console.log(data);
        this.isLoading=false
    });

  }
  getTrendingMoviesThriller(){
    this.isLoading=true
    this._MovieApiService.getTrendingMoviesThriller().subscribe((data)=>{
        this.allTrendingMoviesThriller = data.results;
        console.log(data);
        this.isLoading=false
    });

  }
  getTrendingMoviesComedy(){
    this.isLoading=true
    this._MovieApiService.getTrendingMoviesComedy().subscribe((data)=>{
        this.allTrendingMoviesComedy = data.results;
        console.log(data);
        this.isLoading=false
    });

  }
  getTrendingMoviesAnimation(){
    this.isLoading=true
    this._MovieApiService.getTrendingMoviesAnimation().subscribe((data)=>{
        this.allTrendingMoviesAnimation = data.results;
        console.log(data);
        this.isLoading=false
    });

  }
  getTrendingMoviesAdventure(){
    this.isLoading=true
    this._MovieApiService.getTrendingMoviesAdventure().subscribe((data)=>{
        this.allTrendingMoviesAdventure = data.results;
        console.log(data);
        this.isLoading=false
    });

  }
  getTrendingMoviesScience(){
    this.isLoading=true
    this._MovieApiService.getTrendingMoviesScience().subscribe((data)=>{
        this.allTrendingMoviesScience = data.results;
        console.log(data);
        this.isLoading=false
    });

  }



  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['previous', 'next'],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
  }

}
