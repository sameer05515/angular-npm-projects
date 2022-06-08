import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() { }
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public lineChartLabels = ['2000', '2001', '2002', '2003', '2004', '2005', '2006'];
  public lineChartType = 'line';
  public lineChartLegend = true;
  public lineChartData = [
    {data: [75, 49, 89, 31, 86, 35, 50], label: 'Series A'},
    {data: [48, 38, 65, 39, 66, 17, 80], label: 'Series B'}
  ];
  ngOnInit() {
  }
}
