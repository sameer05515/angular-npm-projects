import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TreeComponent } from './tree/tree.component';
import { TreeListComponent } from './tree-list/tree-list.component';
import { TopicWidgetComponent } from './topic-widget/topic-widget.component';
import { TopicListComponent } from './topic-widget/topic-list/topic-list.component';
import { TopicComponentComponent } from './topic-widget/topic-list/topic-component/topic-component.component';
import { TopicDetailsComponent } from './topic-widget/topic-details/topic-details.component';


@NgModule({
  declarations: [
    AppComponent,
    TreeListComponent,
    TreeComponent,
    TopicWidgetComponent,
    TopicListComponent,
    TopicComponentComponent,
    TopicDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
