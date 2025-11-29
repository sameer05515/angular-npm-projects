import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'custom-text',
    loadChildren: () => import('./features/text-editor/text-editor.module').then(m => m.TextEditorModule)
  },
  {
    path: 'test-custom-text',
    loadChildren: () => import('./features/test-components/test-components.module').then(m => m.TestComponentsModule)
  },
  {
    path: '',
    redirectTo: '/custom-text',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/custom-text'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
