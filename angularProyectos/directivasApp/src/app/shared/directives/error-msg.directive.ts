import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[errorMsg]'
})
export class ErrorMsgDirective implements OnInit {

htmlElement:ElementRef<HTMLElement>;
@Input() color:string='red';

  constructor( private el:ElementRef<HTMLElement>) {
    console.log('constructor directive');
    console.log(el);

   this.htmlElement= el;

  }
  ngOnInit(): void {
    console.log('NgOnit Directiva');
    this.setColor();
  }

  setColor():void{
    this.htmlElement.nativeElement.style.color=this.color;
  }

}
