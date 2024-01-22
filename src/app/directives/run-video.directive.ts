import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRunVideo]'
})
export class RunVideoDirective implements OnInit{

  constructor(private _ElementRef:ElementRef) { }

  ngOnInit():void{
    this._ElementRef.nativeElement.addEventListener('mouseover',(el:any)=>{

      // console.log(el);
  })

  };



}
