import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import * as moment from 'moment';

interface ClickData {
  time: String;
  count: number;
}

@Component({
  selector: 'app-click-counter',
  templateUrl: './click-counter.component.html',
  styleUrls: ['./click-counter.component.css']
})
export class ClickCounterComponent implements OnInit {

  clickDataList: ClickData[] = [
    // { "time": "July 9th 2022, 6:32 pm", "count": 277 },
    // { "time": "July 9th 2022, 6:33 pm", "count": 268 },
    // { "time": "July 9th 2022, 6:34 pm", "count": 271 },
    // { "time": "July 9th 2022, 6:35 pm", "count": 278 },
    // { "time": "July 9th 2022, 6:36 pm", "count": 279 }
  ];

  countResult = "";

  private count = 0;
  private thousandCount = 0;
  private lacCount = 0;
  private croreCount = 0;
  private arabCount = 0;

  onDivClick = () => {
    this.count += 1;
    if (this.count >= 1000) {
      this.thousandCount += 1;
      if (this.thousandCount >= 100) {
        this.lacCount += 1;
        this.thousandCount = (this.thousandCount - 100);
      }
      if (this.lacCount >= 100) {
        this.croreCount += 1;
        this.lacCount = (this.lacCount - 100);
      }
      if (this.croreCount >= 100) {
        this.arabCount += 1;
        this.croreCount = (this.croreCount - 100);
      }
      this.count = (this.count - 1000);
    }

    this.countResult = ((this.arabCount > 0) ? this.arabCount + " Arab , " : " ")
      + ((this.croreCount > 0) ? this.croreCount + " Crore , " : " ")
      + ((this.lacCount > 0) ? this.lacCount + " Lac , " : " ")
      + ((this.thousandCount > 0) ? this.thousandCount + " Thousand , " : " ") +
      ((this.count > 0) ? this.count : " ");

    this.addDataAndRender();

    console.log(this.clickDataList)

  }

  addDataAndRender(addNewData: boolean = true) {


    if (addNewData) {
      let timeStr: string = moment().format('MMMM Do YYYY, h:mm a');
      let index: number = this.clickDataList.findIndex(el => { return el.time + '' === timeStr })
      console.log(index)
      if (index === -1) {
        this.clickDataList.push({ time: timeStr, count: 1 })
      } else {
        this.clickDataList[index].count += 1;
      }
    }

    if(this.clickDataList.length>5){
      this.clickDataList= this.clickDataList.splice(-5);
    }    
    this.lineChartData[0].data = this.clickDataList.map(x => x.count);
    this.lineChartLabels = this.clickDataList.map(x => x.time + '');

  }

  constructor() { }

  ngOnInit(): void {
    this.addDataAndRender(false);
  }

  ///// chart data

  lineChartData: ChartDataSets[] = [
    { data: [], label: 'Click Data' },
  ];

  lineChartLabels: Label[] = [];

  lineChartOptions = {
    responsive: true,
    scales: {
      y: {
        ticks: {
          stepSize: 1
        }
      },
      yAxes: [{
        display: true,
        ticks: {
          suggestedMin: 250,    // minimum will be 0, unless there is a lower value.
          // OR //
          beginAtZero: true   // minimum value will be 0.
        }
      }]
    }
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

}
