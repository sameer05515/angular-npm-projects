import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-trix-editor-angular',
  templateUrl: './trix-editor-angular.component.html',
  styleUrls: ['./trix-editor-angular.component.css']
})
export class TrixEditorAngularComponent implements OnInit {

  @Input() editor: any;

  constructor() { }

  ngOnInit(): void {
    const element: any = document.querySelector('trix-editor');
    console.log(element.editor.getDocument());
    element.addEventListener('trix-attachment-add', (event) => {
      if (event.attachment.file) {
        console.log(event);
      }
    });
  }

}
