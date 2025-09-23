import { Component,Input  } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-markdown-viewer',
  imports: [MarkdownModule],
  templateUrl: './markdown-viewer.html',
  styleUrl: './markdown-viewer.css'
})
export class MarkdownViewer {
/** Either provide raw markdown string or file path */
  @Input() markdownContent: string = '';
}
