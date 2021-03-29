import { Component} from '@angular/core';

interface MenuItem{
  ruta:string;
  texto:string;
}


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent  {

  menu:MenuItem[]=[
    {ruta:'./graficas/barra',texto:'Barras'},
    {ruta:'./graficas/barra-doble',texto:'Barras Dobles'},
    {ruta:'./graficas/barra',texto:'barras'},
    {ruta:'./graficas/barra',texto:'barras'},
  ]

}
