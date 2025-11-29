import { Injectable } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { EditorConfigOptions } from '../interfaces/editor-config.interface';

@Injectable({
  providedIn: 'root'
})
export class EditorConfigService {
  
  private readonly defaultCustomClasses = [
    {
      name: 'quote',
      class: 'quote',
    },
    {
      name: 'redText',
      class: 'redText'
    },
    {
      name: 'titleText',
      class: 'titleText',
      tag: 'h1',
    },
  ];

  /**
   * Creates an AngularEditorConfig with default values
   * @param options Optional configuration overrides
   * @returns AngularEditorConfig instance
   */
  createConfig(options: EditorConfigOptions = {}): AngularEditorConfig {
    return {
      editable: options.editable ?? true,
      spellcheck: options.spellcheck ?? true,
      height: options.height,
      minHeight: options.minHeight,
      placeholder: options.placeholder ?? 'Enter text here...',
      translate: options.translate ?? 'no',
      defaultParagraphSeparator: options.defaultParagraphSeparator ?? 'p',
      defaultFontName: options.defaultFontName ?? 'Arial',
      showToolbar: options.showToolbar ?? true,
      toolbarHiddenButtons: options.toolbarHiddenButtons ?? [['bold']],
      customClasses: options.customClasses ?? this.defaultCustomClasses,
    };
  }

  /**
   * Gets default custom classes
   */
  getDefaultCustomClasses() {
    return [...this.defaultCustomClasses];
  }
}

