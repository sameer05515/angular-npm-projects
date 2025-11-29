import { 
  Component, 
  Input, 
  Output, 
  EventEmitter, 
  OnChanges, 
  SimpleChanges,
  OnInit,
  HostListener
} from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { EditorConfigService } from '../../core/services/editor-config.service';
import { EditorConfigOptions } from '../../core/interfaces/editor-config.interface';
import { TextAnalysisService, TextStats } from '../../core/services/text-analysis.service';
import { StorageService, SavedDocument } from '../../core/services/storage.service';
import { ExportService } from '../../core/services/export.service';

const DEFAULT_HTML_CONTENT = '<h2>Next Steps</h2><p>What do you want to do next with your app?</p><div class="card-container"><span>New Component</span><span>Angular Material</span><span>Add PWA Support</span><span>Add Dependency</span><span>Run and Watch Tests</span><span>Build for Production</span></div>';

@Component({
  selector: 'app-custom-text-editor',
  templateUrl: './custom-text-editor.component.html',
  styleUrls: ['./custom-text-editor.component.css']
})
export class CustomTextEditorComponent implements OnChanges, OnInit {
  
  @Input() htmlContent: string = DEFAULT_HTML_CONTENT;
  @Input() editable: boolean = false;
  @Input() showToolbar: boolean = false;
  @Input() customConfig?: EditorConfigOptions;
  
  @Output() contentChange = new EventEmitter<string>();

  htmlText: string = DEFAULT_HTML_CONTENT;
  config!: AngularEditorConfig;
  documentTitle: string = 'Untitled';
  textStats: TextStats | null = null;
  showDocumentManager: boolean = false;
  isFullscreen: boolean = false;
  darkMode: boolean = false;
  showHtmlOutput: boolean = true;

  constructor(
    private editorConfigService: EditorConfigService,
    private textAnalysisService: TextAnalysisService,
    private storageService: StorageService,
    private exportService: ExportService
  ) {
    this.updateConfig();
    this.loadDarkModePreference();
  }

  ngOnInit(): void {
    this.loadSavedDocument();
    this.updateStats();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['htmlContent'] && changes['htmlContent'].currentValue !== undefined) {
      this.htmlText = changes['htmlContent'].currentValue;
      this.updateStats();
    }

    if (changes['editable'] || changes['showToolbar'] || changes['customConfig']) {
      this.updateConfig();
    }
  }

  onContentChange(content: string): void {
    this.htmlText = content;
    this.updateStats();
    this.autoSave();
    this.contentChange.emit(content);
  }

  updateStats(): void {
    this.textStats = this.textAnalysisService.analyzeText(this.htmlText);
  }

  autoSave(): void {
    this.storageService.saveCurrentDocument(this.htmlText, this.documentTitle);
  }

  loadSavedDocument(): void {
    const saved = this.storageService.getCurrentDocument();
    if (saved) {
      this.htmlText = saved.content;
      this.documentTitle = saved.title;
      this.updateStats();
    }
  }

  openDocumentManager(): void {
    this.showDocumentManager = true;
  }

  closeDocumentManager(): void {
    this.showDocumentManager = false;
  }

  onDocumentSelected(document: SavedDocument): void {
    this.htmlText = document.content;
    this.documentTitle = document.title;
    this.updateStats();
    this.closeDocumentManager();
  }

  saveDocument(): void {
    this.storageService.saveDocument(this.documentTitle, this.htmlText);
    alert('Document saved successfully!');
  }

  clearContent(): void {
    if (confirm('Are you sure you want to clear all content?')) {
      this.htmlText = '';
      this.documentTitle = 'Untitled';
      this.updateStats();
    }
  }

  exportAsHtml(): void {
    this.exportService.exportAsFormattedHtml(this.htmlText, this.documentTitle, `${this.documentTitle}.html`);
  }

  exportAsText(): void {
    this.exportService.exportAsText(this.htmlText, `${this.documentTitle}.txt`);
  }

  async copyToClipboard(): Promise<void> {
    const success = await this.exportService.copyToClipboard(this.htmlText);
    if (success) {
      alert('Content copied to clipboard!');
    } else {
      alert('Failed to copy to clipboard');
    }
  }

  async copyHtmlToClipboard(): Promise<void> {
    const success = await this.exportService.copyToClipboard(this.htmlText);
    if (success) {
      alert('HTML copied to clipboard!');
    } else {
      alert('Failed to copy HTML to clipboard');
    }
  }

  printDocument(): void {
    this.exportService.printContent(this.htmlText, this.documentTitle);
  }

  toggleFullscreen(): void {
    if (!this.isFullscreen) {
      this.enterFullscreen();
    } else {
      this.exitFullscreen();
    }
  }

  enterFullscreen(): void {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    }
    this.isFullscreen = true;
  }

  exitFullscreen(): void {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
    this.isFullscreen = false;
  }

  @HostListener('document:fullscreenchange', ['$event'])
  onFullscreenChange(): void {
    this.isFullscreen = !!document.fullscreenElement;
  }

  toggleDarkMode(): void {
    this.darkMode = !this.darkMode;
    this.applyDarkMode();
    localStorage.setItem('text-editor-dark-mode', String(this.darkMode));
  }

  loadDarkModePreference(): void {
    const saved = localStorage.getItem('text-editor-dark-mode');
    this.darkMode = saved === 'true';
    this.applyDarkMode();
  }

  applyDarkMode(): void {
    if (this.darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }

  toggleHtmlOutput(): void {
    this.showHtmlOutput = !this.showHtmlOutput;
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
