import { Component, Input } from '@angular/core';
import { Question } from '../../model/Conv.type';
import { MarkdownViewer } from '../markdown-viewer/markdown-viewer';

@Component({
  selector: 'app-qaviewer',
  imports: [MarkdownViewer],
  templateUrl: './qaviewer.html',
  styleUrl: './qaviewer.css',
})
export class QAViewer {
  @Input() data: Question | null = null;
}
