import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { TopicWidgetComponent } from './topic-widget/topic-widget.component';
import { TreeListComponent } from './tree-list/tree-list.component';
import { UserDetailComponent } from './user-list/user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/tree-list', pathMatch: 'full' },
  { path: 'tree-list', component: TreeListComponent },
  { path: 'topic-list', component: TopicWidgetComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'user-details/:id', component: UserDetailComponent },
  {path: '**', pathMatch: 'full', 
  component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
