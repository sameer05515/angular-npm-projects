import { Component } from '@angular/core';

@Component({
  selector: 'app-test-text-component',
  templateUrl: './test-text-component.component.html',
  styleUrls: ['./test-text-component.component.css']
})
export class TestTextComponentComponent {
  rawData: string = 'Raw Data';
  editorContent: string = '<p>Test content for the editor</p>';
  isEditable: boolean = true;
  showToolbar: boolean = true;

  onContentChange(content: string): void {
    this.editorContent = content;
    console.log('Content changed:', content);
  }
}
