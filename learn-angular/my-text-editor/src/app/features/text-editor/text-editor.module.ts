import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { CustomTextEditorComponent } from '../../shared-components/custom-text-editor/custom-text-editor.component';
import { DocumentManagerComponent } from '../../shared-components/document-manager/document-manager.component';

const routes: Routes = [
  {
    path: '',
    component: CustomTextEditorComponent
  }
];

@NgModule({
  declarations: [
    CustomTextEditorComponent,
    DocumentManagerComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    CustomTextEditorComponent
  ]
})
export class TextEditorModule { }

