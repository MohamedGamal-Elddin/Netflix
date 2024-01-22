import { MovieApiService } from 'src/app/service/movie-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit{
  pagesNumber:number[]=[];
  allPeople:any[]=[];
  path = this._MovieApiService.anyImagePath;
  constructor(private _MovieApiService:MovieApiService){
    // this.pagesNumber = new Array(20).fill('').map((el,ind)=>ind+1);

    this.pagesNumber = new Array(20).fill('').map((el,ind)=>ind+1)
  }

  ngOnInit():void{
    this.getPopularPeople(1);
  }

  getPopularPeople(page:number){
      this._MovieApiService.getPopularPeople(page).subscribe({
        next:(data)=>{
          console.log(data);
          this.allPeople=data.results

        }
      })
    }

  }
