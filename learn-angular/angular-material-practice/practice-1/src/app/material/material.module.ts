import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatFormFieldModule} from '@angular/material/form-field';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

import {MatCheckboxModule} from '@angular/material/checkbox';

import {MatTableModule} from '@angular/material/table';

import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';

import {CdkTreeModule} from '@angular/cdk/tree';
import {MatTreeModule} from '@angular/material/tree';

import {CdkAccordionModule} from '@angular/cdk/accordion';

import {DragDropModule} from '@angular/cdk/drag-drop';

import {CdkMenuModule} from '@angular/cdk/menu';

import {ScrollingModule} from '@angular/cdk/scrolling';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatTableModule,
    MatMenuModule,
    MatPaginatorModule,
    CdkTreeModule,
    MatTreeModule,
    CdkAccordionModule,
    DragDropModule,
    CdkMenuModule,
    ScrollingModule,
    MatFormFieldModule,
    MatCheckboxModule
  ],
  exports: [
    MatButtonModule, 
    MatIconModule, 
    MatDividerModule,
    MatTableModule,
    MatMenuModule,
    MatPaginatorModule,
    CdkTreeModule,
    MatTreeModule,
    CdkAccordionModule,
    DragDropModule,
    CdkMenuModule,
    ScrollingModule,
    MatFormFieldModule,
    MatCheckboxModule
  ]
})
export class MaterialModule { }
