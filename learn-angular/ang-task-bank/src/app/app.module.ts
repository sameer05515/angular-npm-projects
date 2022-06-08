import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewComponent } from './dashboard/new/new.component';
import { EditComponent } from './dashboard/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NewComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
