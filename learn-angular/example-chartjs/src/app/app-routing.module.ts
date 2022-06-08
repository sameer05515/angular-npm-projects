import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';

const routes: Routes = [
  { path: 'bar-chart', component: BarChartComponent },
  { path: 'line-chart', component: LineChartComponent },
  { path: 'doughnut-chart', component: DoughnutChartComponent },
  { path: 'radar-chart', component: RadarChartComponent },
  { path: 'pie-chart', component: PieChartComponent },
  { path: 'bubble-chart', component: BubbleChartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
