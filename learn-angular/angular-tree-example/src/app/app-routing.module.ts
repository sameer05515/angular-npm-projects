import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopicWidgetComponent } from './topic-widget/topic-widget.component';
import { TreeListComponent } from './tree-list/tree-list.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/tree-list', pathMatch: 'full' },
  { path: 'tree-list', component: TreeListComponent },
  { path: 'topic-list', component: TopicWidgetComponent },
  { path: 'user-list', component: UserListComponent },
  {path: '**', redirectTo: '/tree-list'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
