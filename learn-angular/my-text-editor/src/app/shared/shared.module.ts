import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';

/**
 * Shared module containing common imports and exports
 * that can be used across feature modules
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AngularEditorModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AngularEditorModule
  ]
})
export class SharedModule { }

