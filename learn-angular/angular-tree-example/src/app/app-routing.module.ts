import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopicListComponent } from './topic-widget/topic-list/topic-list.component';
import { TreeListComponent } from './tree-list/tree-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/tree-list', pathMatch: 'full' },
  { path: 'tree-list', component: TreeListComponent },
  { path: 'topic-list', component: TopicListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
