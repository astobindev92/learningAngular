import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';
import { GraficasService } from '../../servicios/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [],
})
export class DonaHttpComponent implements OnInit {
  public doughnutChartLabels: Label[] = [
    //  'Download Sales', 'In-Store Sales', 'Mail-Order Sales','others'
  ];
  public doughnutChartData: MultiDataSet = [
    //  [350, 450, 100,123]
  ];
  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[] = [
    {
      backgroundColor: ['#E02D19', '#ED0EA1', '#ED660E', '#F7B30F', '#0EAEED'],
    },
  ];

  constructor(private _graficasService: GraficasService) {}

  ngOnInit(): void {
    // this._graficasService.getUsuariosRedesSociales().subscribe(data=>{
    // console.log(data);
    // const labels=Object.keys(data);
    // const values=Object.values(data);
    // this.doughnutChartData.push(values);
    // this.doughnutChartLabels=labels;
    //})

    this._graficasService.getUsuariosRedesSocialesDonaData()
    .subscribe(({labels,values})=>{

      this.doughnutChartLabels=labels;
      this.doughnutChartData.push(values);

    })

  }
}
