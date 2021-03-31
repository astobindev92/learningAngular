import { Component } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent{

  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales','others'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100,123]
  ];
  public doughnutChartType: ChartType = 'doughnut';

  public colors:Color[]=[
    {
      backgroundColor:[
        '#E02D19',
        '#ED0EA1',
        '#ED660E',
        '#F7B30F',
        '#0EAEED',
      ]
    }
  ]
}
