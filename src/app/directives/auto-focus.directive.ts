import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appAutoFocus]'
})
export class AutoFocusDirective implements OnInit {

  constructor(private _ElementRef:ElementRef) {

  }
  ngOnInit():void{
    this._ElementRef.nativeElement.focus()
  }
}
