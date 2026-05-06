import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { marked } from 'marked';

export type SmartContentPreview = {
  content: string;
  textOutputType?: string;
};

@Component({
  selector: 'app-smart-content-previewer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './smart-content-previewer.html',
  styleUrl: './smart-content-previewer.css'
})
export class SmartContentPreviewerComponent {
  @Input() title = 'Smart Content Preview';
  @Input() emptyText = 'No smart content available.';
  @Input() value: SmartContentPreview | null = null;

  get hasContent(): boolean {
    return !!this.value?.content?.trim();
  }

  get shouldRenderAsHtml(): boolean {
    const type = this.value?.textOutputType?.toLowerCase() ?? '';
    return type === 'html' || type === 'markup';
  }

  get shouldRenderAsMarkdown(): boolean {
    const type = this.value?.textOutputType?.toLowerCase() ?? '';
    return type === 'markdown';
  }

  get renderedContent(): string {
    const raw = this.value?.content ?? '';
    if (!raw.trim()) {
      return '';
    }

    if (this.shouldRenderAsMarkdown) {
      const rendered = marked.parse(raw);
      return typeof rendered === 'string' ? rendered : '';
    }

    return raw;
  }
}
