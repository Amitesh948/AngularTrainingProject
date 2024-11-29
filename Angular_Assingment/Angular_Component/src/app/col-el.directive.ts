import { Directive , ElementRef } from '@angular/core';

@Directive({
  selector: '[appColEl]'
})
export class ColElDirective {

  constructor(el : ElementRef) { 
    el.nativeElement.style.color="blue"
  }

}
