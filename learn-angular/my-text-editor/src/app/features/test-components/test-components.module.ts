import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { TestTextComponentComponent } from '../../test-components/test-text-component/test-text-component.component';
import { TextEditorModule } from '../text-editor/text-editor.module';

const routes: Routes = [
  {
    path: '',
    component: TestTextComponentComponent
  }
];

@NgModule({
  declarations: [
    TestTextComponentComponent
  ],
  imports: [
    SharedModule,
    TextEditorModule,
    RouterModule.forChild(routes)
  ]
})
export class TestComponentsModule { }

