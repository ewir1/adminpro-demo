import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styleUrls: ['./grafico-dona.component.scss']
})
export class GraficoDonaComponent implements OnInit {

// tslint:disable-next-line: no-input-rename
  @Input('chartLabels') doughnutChartLabels: String[] = [];
// tslint:disable-next-line: no-input-rename
  @Input('chartData') doughnutChartData: any = [];
// tslint:disable-next-line: no-input-rename
  @Input('chartType') doughnutChartType: ChartType = '';

  constructor() { }

  ngOnInit() {
  }

}
