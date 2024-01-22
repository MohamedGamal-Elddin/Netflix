import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  constructor(private _Router:Router){}
  @Input() movie:any;
  anyImagePath = 'https://image.tmdb.org/t/p/original/';
  defaultImage:string = 'https://st2.depositphotos.com/47577860/46278/v/450/depositphotos_462789280-stock-illustration-alert-attention-delete-icon-solid.jpg'



  getDetails(id:string){
    this._Router.navigateByUrl(`movieDetails/${id}`)
  }

}
