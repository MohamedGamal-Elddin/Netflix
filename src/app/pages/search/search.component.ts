import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MovieApiService } from 'src/app/service/movie-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit , AfterViewInit{
  allMovies:any = [];
  pagesNumber!:number[];  // pagination
  isLoading:boolean=false
  // run with AfterViewInit only (Not run with onInit) but when using {static:true} will using in onInit normally  ;
  @ViewChild('inputSearch' ,{static:true} ) myInputSearch!:ElementRef
  @ViewChild('colorChange',{static:true} ) newColor!:ElementRef
  allTrendingMovies:any=[]; // when open page searching(the starting)
  words:string = '';
  anyImagePath = 'https://image.tmdb.org/t/p/original/';
  defaultImage:string = 'https://st2.depositphotos.com/47577860/46278/v/450/depositphotos_462789280-stock-illustration-alert-attention-delete-icon-solid.jpg'

  noDetails:string= 'no details in the this movie '

  constructor(private _MovieApiService:MovieApiService , private _Router:Router , private _ElementRef:ElementRef){
    this.pagesNumber = new Array(20).fill('').map((el,index)=>index+1)
  }
  ngAfterViewInit() {
    // this.myInputSearch.nativeElement.focus() // when search page open will focus on input search automatic
    // this.newColor.nativeElement.style.color = 'red'

  }

  getMoviesFromSearching(){
    this._MovieApiService.getMoviesFromSearching(this.words).subscribe((data)=>{
        this.allMovies = data.results;
        console.log(data);

    })
  }

  ngOnInit(): void {
    this.getTrendingMovies(1);
    this.myInputSearch.nativeElement.focus() // when search page open will focus on input search automatic

  }

  getTrendingMovies(page:number){
    // if(this.allMovies){
      this.isLoading=true
      this._MovieApiService.getTrendingMovies(page).subscribe((data)=>{

        this.allTrendingMovies = data.results;
        console.log(this.allTrendingMovies);
        this.isLoading=false


      })

  }
  getDetails(id:string){
    this._Router.navigateByUrl(`movieDetails/${id}`)
  }



}
