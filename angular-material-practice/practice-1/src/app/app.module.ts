import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';


import { ButtonExampleComponent } from './button-example/button-example.component';
import { TableExampleComponent } from './table-example/table-example.component';

import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { TreeExampleComponent } from './tree-example/tree-example.component';
import { AccordianExampleComponent } from './accordian-example/accordian-example.component';
import { DragDropExampleComponent } from './drag-drop-example/drag-drop-example.component';
import { ScrollExampleComponent } from './scroll-example/scroll-example.component';
import { MatTreeExampleComponent } from './mat-tree-example/mat-tree-example.component';


@NgModule({
  declarations: [
    AppComponent,
    ButtonExampleComponent,
    TableExampleComponent,
    MenuComponent,
    TreeExampleComponent,
    AccordianExampleComponent,
    DragDropExampleComponent,
    ScrollExampleComponent,
    MatTreeExampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
