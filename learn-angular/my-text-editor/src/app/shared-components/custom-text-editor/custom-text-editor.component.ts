import { 
  Component, 
  Input, 
  Output, 
  EventEmitter, 
  OnChanges, 
  SimpleChanges
} from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { EditorConfigService } from '../../core/services/editor-config.service';
import { EditorConfigOptions } from '../../core/interfaces/editor-config.interface';

const DEFAULT_HTML_CONTENT = '<h2>Next Steps</h2><p>What do you want to do next with your app?</p><div class="card-container"><span>New Component</span><span>Angular Material</span><span>Add PWA Support</span><span>Add Dependency</span><span>Run and Watch Tests</span><span>Build for Production</span></div>';

@Component({
  selector: 'app-custom-text-editor',
  templateUrl: './custom-text-editor.component.html',
  styleUrls: ['./custom-text-editor.component.css']
})
export class CustomTextEditorComponent implements OnChanges {
  
  @Input() htmlContent: string = DEFAULT_HTML_CONTENT;
  @Input() editable: boolean = false;
  @Input() showToolbar: boolean = false;
  @Input() customConfig?: EditorConfigOptions;
  
  @Output() contentChange = new EventEmitter<string>();

  htmlText: string = DEFAULT_HTML_CONTENT;
  config!: AngularEditorConfig;

  constructor(private editorConfigService: EditorConfigService) {
    this.updateConfig();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['htmlContent'] && changes['htmlContent'].currentValue !== undefined) {
      this.htmlText = changes['htmlContent'].currentValue;
    }

    if (changes['editable'] || changes['showToolbar'] || changes['customConfig']) {
      this.updateConfig();
    }
  }

  onContentChange(content: string): void {
    this.htmlText = content;
    this.contentChange.emit(content);
  }

  private updateConfig(): void {
    const configOptions: EditorConfigOptions = {
      editable: this.editable,
      showToolbar: this.showToolbar,
      ...this.customConfig
    };
    
    this.config = this.editorConfigService.createConfig(configOptions);
  }
}
