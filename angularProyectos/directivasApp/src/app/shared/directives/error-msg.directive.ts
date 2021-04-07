import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[errorMsg]'
})
export class ErrorMsgDirective implements OnInit,OnChanges {

  private _color:string='red';
  private _mensaje:string='Este campo es requerido';


htmlElement:ElementRef<HTMLElement>;

@Input() set color(valor:string){
  this.setColor();
  this._color=valor;
}

@Input () set mensaje(valor:string){
  this.setMensaje();
  this._mensaje=valor;
}

@Input () set valido(valor:boolean){
  if(valor==true){
    this.htmlElement.nativeElement.classList.add('hidden');
  }else{
    this.htmlElement.nativeElement.classList.remove('hidden');
  }
}

//@Input() mensaje:string='Este campo es necesario';

  constructor( private el:ElementRef<HTMLElement>) {

   this.htmlElement= el;

  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnInit(): void {

    this.setColor();
    this.setMensaje();
    this.setEstilo();

  }

  setEstilo(){
    this.htmlElement.nativeElement.classList.add('form-text')
  }

  setColor():void{
    this.htmlElement.nativeElement.style.color=this._color;
  }


  setMensaje():void{
    this.htmlElement.nativeElement.innerText=this._mensaje;
  }

}
