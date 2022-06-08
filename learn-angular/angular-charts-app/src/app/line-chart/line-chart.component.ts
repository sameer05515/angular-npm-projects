import { Component, } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import {referenceData as GoldPriceReferenceData} from '../shared/util/GoldPriceReferenceData'

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})

export class LineChartComponent {

  // lineChartData: ChartDataSets[] = [
  //   { data: [85, 72, 78, 75, 77, 75], label: 'Crude oil prices' },
  // ];

  // lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];

  // lineChartData: ChartDataSets[] = [
  //   { data: GoldPriceReferenceData.map(item=>item.pricePer10gm), label: '10 gm Gold prices' },
  // ];

  // lineChartLabels: Label[] = GoldPriceReferenceData.map(item=>item.year+'');

  actualSal=[1.2, 1.8, 3, 3.36, 4.5, 5, 5.5,6,9,6.75,8.5,8.5,10.5,23];
  counter=0;

  lineChartData: ChartDataSets[] = [
    { data: this.actualSal.map(x=>x) , label: 'Salary graph' },
    { data: this.actualSal.map(x=>{ 
      let y=0;     
      let referenceYear = 2009+this.counter++;
      let targetYear = 2009;
      const referenceYGoldPrice = GoldPriceReferenceData.find(el => el.year === referenceYear);
      const targetYGoldPrice = GoldPriceReferenceData.find(el => el.year === targetYear);
      if(targetYGoldPrice && referenceYGoldPrice){
        y=x*(targetYGoldPrice.pricePer10gm/referenceYGoldPrice.pricePer10gm)
      }
      console.log(`'Rs.${x}' of '${referenceYear}' is equivalent of 'Rs.${y}' of '${targetYear}'`)
      return y;      
    }), label: 'Equivalent Salary for 2009' },
    // { data: this.actualSal.map(x=>{ 
    //   let y=0;     
    //   let referenceYear = 2009+this.counter++;
    //   let targetYear = 2009;
    //   const referenceYGoldPrice = GoldPriceReferenceData.find(el => el.year === referenceYear);
    //   const targetYGoldPrice = GoldPriceReferenceData.find(el => el.year === targetYear);
    //   if(targetYGoldPrice && referenceYGoldPrice){
    //     y=(x*(targetYGoldPrice.pricePer10gm/referenceYGoldPrice.pricePer10gm))*10*100/targetYGoldPrice.pricePer10gm
    //   }
    //   console.log(`'Rs.${x}' of '${referenceYear}' is equivalent of 'Rs.${y}' of '${targetYear}'`)
    //   return y;      
    // }), label: 'Equivalent gold (Kg.) purchase capacity for 2009' },
  ];

  lineChartLabels: Label[] = ['2009', '2010', '2011', '2012', '2013', '2014','2015','2016','2017','2018','2019','2020','2021','2022'];

  lineChartOptions = {
    responsive: true,
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