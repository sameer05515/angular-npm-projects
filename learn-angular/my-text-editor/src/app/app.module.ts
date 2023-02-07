import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularEditorModule } from '@kolkov/angular-editor';
import { CustomTextEditorComponent } from './shared-components/custom-text-editor/custom-text-editor.component';
import { TestTextComponentComponent } from './test-components/test-text-component/test-text-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomTextEditorComponent,
    TestTextComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule,
    AngularEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
