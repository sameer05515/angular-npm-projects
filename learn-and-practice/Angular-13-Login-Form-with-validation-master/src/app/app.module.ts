import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {
//   MatButtonModule,
//   MatCheckboxModule,
//   MatInputModule,
//   MatSelectModule,
//   MatDatepickerModule,
//   MatNativeDateModule
//  } from '@angular/material';

 import {MatButtonModule} from '@angular/material/button';
 import {MatCheckboxModule} from '@angular/material/checkbox';
 import {MatInputModule} from '@angular/material/input';
 import {MatSelectModule} from '@angular/material/select';
 import {MatDatepickerModule} from '@angular/material/datepicker';
 import { MatNativeDateModule } from '@angular/material/core';

import { FormsComponent } from './forms/forms.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
