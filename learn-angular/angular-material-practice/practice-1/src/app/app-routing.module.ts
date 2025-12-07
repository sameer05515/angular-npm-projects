import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccordianExampleComponent } from './accordian-example/accordian-example.component';
import { ButtonExampleComponent } from './button-example/button-example.component';
import { DragDropExampleComponent } from './drag-drop-example/drag-drop-example.component';
import { MatTreeExampleComponent } from './mat-tree-example/mat-tree-example.component';
import { ScrollExampleComponent } from './scroll-example/scroll-example.component';
import { TableExampleComponent } from './table-example/table-example.component';
import { TreeExampleComponent } from './tree-example/tree-example.component';


const routes: Routes = [
  { path: '', redirectTo: 'button', pathMatch:'full'},
  { path: 'button', component: ButtonExampleComponent },
  {path: 'table', component: TableExampleComponent},
  {path: 'tree', component: TreeExampleComponent},
  {path: 'mat-tree', component: MatTreeExampleComponent},
  {path: 'accordian', component: AccordianExampleComponent},
  {path: 'drag-drop', component: DragDropExampleComponent},
  {path: 'scroll', component: ScrollExampleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
