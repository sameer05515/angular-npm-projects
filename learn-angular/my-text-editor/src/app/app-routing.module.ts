import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomTextEditorComponent } from './shared-components/custom-text-editor/custom-text-editor.component';
import { TestTextComponentComponent } from './test-components/test-text-component/test-text-component.component';

const routes: Routes = [
  { path: 'custom-text', component: CustomTextEditorComponent },
  { path: 'test-custom-text', component: TestTextComponentComponent },
  { path: '', redirectTo: '/custom-text', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
