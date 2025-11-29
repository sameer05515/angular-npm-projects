import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { StorageService, SavedDocument } from '../../core/services/storage.service';

@Component({
  selector: 'app-document-manager',
  templateUrl: './document-manager.component.html',
  styleUrls: ['./document-manager.component.css']
})
export class DocumentManagerComponent implements OnInit {
  @Input() currentContent: string = '';
  @Input() currentTitle: string = 'Untitled';
  @Output() documentSelected = new EventEmitter<SavedDocument>();
  @Output() documentDeleted = new EventEmitter<string>();
  @Output() closed = new EventEmitter<void>();

  documents: SavedDocument[] = [];
  showSaveDialog: boolean = false;
  saveTitle: string = '';
  selectedDocumentId: string | null = null;

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    this.loadDocuments();
    this.saveTitle = this.currentTitle;
  }

  loadDocuments(): void {
    this.documents = this.storageService.getAllDocuments();
  }

  openSaveDialog(): void {
    this.saveTitle = this.currentTitle;
    this.showSaveDialog = true;
  }

  saveDocument(): void {
    if (!this.saveTitle.trim()) {
      alert('Please enter a document title');
      return;
    }

    const saved = this.storageService.saveDocument(
      this.saveTitle.trim(),
      this.currentContent,
      this.selectedDocumentId || undefined
    );
    
    this.loadDocuments();
    this.showSaveDialog = false;
    this.selectedDocumentId = null;
    alert('Document saved successfully!');
  }

  loadDocument(document: SavedDocument): void {
    this.documentSelected.emit(document);
    this.closed.emit();
  }

  deleteDocument(id: string, event: Event): void {
    event.stopPropagation();
    if (confirm('Are you sure you want to delete this document?')) {
      this.storageService.deleteDocument(id);
      this.loadDocuments();
      this.documentDeleted.emit(id);
    }
  }

  close(): void {
    this.showSaveDialog = false;
    this.selectedDocumentId = null;
    this.closed.emit();
  }

  selectDocumentForUpdate(document: SavedDocument): void {
    this.selectedDocumentId = document.id;
    this.saveTitle = document.title;
    this.showSaveDialog = true;
  }

  formatDate(date: Date): string {
    return new Date(date).toLocaleString();
  }
}

