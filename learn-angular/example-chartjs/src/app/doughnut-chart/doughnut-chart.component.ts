import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {

  public doughnutChartLabels = ['Q1 Growth', 'Q2 Growth', 'Q3 Growth', 'Q4 Growth'];
  public doughnutChartData = [80, 83, 94, 87];
  public doughnutChartType = 'doughnut';
  constructor() { }
  ngOnInit() {
  }

}
