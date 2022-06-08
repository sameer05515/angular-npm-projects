import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditComponent } from './dashboard/edit/edit.component';
import { NewComponent } from './dashboard/new/new.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'/dashboard'},
  {path:'dashboard',component:DashboardComponent},
  {path:'dashboard/new',component:NewComponent},
    {path:'dashboard/edit',component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
