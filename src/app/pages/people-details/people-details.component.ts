import { Router, Params, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MovieApiService } from 'src/app/service/movie-api.service';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.css']
})
export class PeopleDetailsComponent implements OnInit{
  allPeopleDetails:any={};
  path = this._MovieApiService.anyImagePath;
  isLoading:boolean=false;
  constructor(private _MovieApiService:MovieApiService, private _Router:Router,private _ActivatedRoute:ActivatedRoute ){

  }

  ngOnInit():void{
    let id = parseInt(this._ActivatedRoute.snapshot.paramMap.get('id')||'');
    this.isLoading=true
    this._MovieApiService.getPopularPeopleDetails(id).subscribe({
      next:(data)=>{
        console.log(data);
        this.isLoading =false
        this.allPeopleDetails=data

      }
    });
  }
}
