import { Directive, HostListener,ElementRef,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNavbarBackground]'
})
export class NavbarBackgroundDirective {
  constructor(private _ElementRef:ElementRef,private _Render2:Renderer2 ) {

  }

  @HostListener('document:scroll') anyNameFun(){
    if(document.documentElement.scrollTop > 0 ){
      this._Render2.setStyle(this._ElementRef.nativeElement,'background-color','#000000');
    }
    else{
      this._Render2.setStyle(this._ElementRef.nativeElement,'background-color','')
    }
  }

}
