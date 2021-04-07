import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[errorMsg]'
})
export class ErrorMsgDirective implements OnInit,OnChanges {

htmlElement:ElementRef<HTMLElement>;
@Input() color:string='red';
@Input() mensaje:string='Este campo es necesario';

  constructor( private el:ElementRef<HTMLElement>) {

   this.htmlElement= el;

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);

  }
  ngOnInit(): void {
    this.setColor();
    this.setMensaje();
  }

  setColor():void{
    this.htmlElement.nativeElement.style.color=this.color;
  }


  setMensaje():void{
    this.htmlElement.nativeElement.innerText=this.mensaje;
  }

}
