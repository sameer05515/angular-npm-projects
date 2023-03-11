import { Component, Input } from '@angular/core';

import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-custom-text-editor',
  templateUrl: './custom-text-editor.component.html',
  styleUrls: ['./custom-text-editor.component.css']
})
export class CustomTextEditorComponent {

  htmlContent = '<h2>Next Steps</h2><p>What do you want to do next with your app?</p><div class="card-container"><span>New Component</span><span>Angular Material</span><span>Add PWA Support</span><span>Add Dependency</span><span>Run and Watch Tests</span><span>Build for Production</span></div>';

  @Input('htmlContent') htmlText:string=this.htmlContent;
  @Input() editable:string='false';
  @Input() showToolbar:string='false';

  config: AngularEditorConfig = {
    editable: 'true'=== this.editable,
    spellcheck: true,
    //height: '15rem',
    //minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    showToolbar:'true'=== this.showToolbar,
    toolbarHiddenButtons: [
      ['bold']
      ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  };

}
