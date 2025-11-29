import { AngularEditorConfig } from '@kolkov/angular-editor';

export interface EditorConfigOptions {
  editable?: boolean;
  spellcheck?: boolean;
  height?: string;
  minHeight?: string;
  placeholder?: string;
  translate?: string;
  defaultParagraphSeparator?: string;
  defaultFontName?: string;
  showToolbar?: boolean;
  toolbarHiddenButtons?: string[][];
  customClasses?: Array<{
    name: string;
    class: string;
    tag?: string;
  }>;
}

export interface TextEditorInputs {
  htmlContent?: string;
  editable?: boolean;
  showToolbar?: boolean;
  config?: EditorConfigOptions;
}

