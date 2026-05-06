import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

export type SmartContent = {
  content: string;
};

@Component({
  selector: 'app-smart-content-editor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './smart-content-editor.html',
  styleUrl: './smart-content-editor.css'
})
export class SmartContentEditorComponent {
  @Input() title = 'Smart Content Editor';
  @Input() placeholder = 'Write your smart content...';

  @Input() set value(next: SmartContent | null | undefined) {
    this.content = next?.content ?? '';
  }

  @Output() valueChange = new EventEmitter<SmartContent>();
  @Output() save = new EventEmitter<SmartContent>();

  content = '';

  onContentChange(): void {
    this.valueChange.emit({ content: this.content });
  }

  saveContent(): void {
    this.save.emit({ content: this.content.trim() });
  }
}
