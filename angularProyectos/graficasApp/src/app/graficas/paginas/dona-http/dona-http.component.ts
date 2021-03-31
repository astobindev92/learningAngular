import { Component, OnInit } from '@angular/core';
import { GraficasService } from '../../servicios/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [],
})
export class DonaHttpComponent implements OnInit {
  constructor(private _graficasService: GraficasService) {}

  ngOnInit(): void {
    this._graficasService.getUsuariosRedesSociales().subscribe((data: any) => {
      console.log(data);
    });
  }
}
