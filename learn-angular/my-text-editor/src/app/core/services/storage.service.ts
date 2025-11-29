import { Injectable } from '@angular/core';

export interface SavedDocument {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private readonly STORAGE_KEY = 'text-editor-documents';
  private readonly CURRENT_DOC_KEY = 'text-editor-current';

  /**
   * Saves a document to localStorage
   */
  saveDocument(title: string, content: string, id?: string): SavedDocument {
    const documents = this.getAllDocuments();
    const now = new Date();
    
    let document: SavedDocument;
    
    if (id) {
      // Update existing document
      const existingIndex = documents.findIndex(doc => doc.id === id);
      if (existingIndex >= 0) {
        document = {
          ...documents[existingIndex],
          title,
          content,
          updatedAt: now
        };
        documents[existingIndex] = document;
      } else {
        document = this.createNewDocument(title, content, id);
        documents.push(document);
      }
    } else {
      // Create new document
      document = this.createNewDocument(title, content);
      documents.push(document);
    }
    
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(documents));
    return document;
  }

  /**
   * Gets all saved documents
   */
  getAllDocuments(): SavedDocument[] {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    if (!stored) return [];
    
    try {
      const documents = JSON.parse(stored);
      return documents.map((doc: any) => ({
        ...doc,
        createdAt: new Date(doc.createdAt),
        updatedAt: new Date(doc.updatedAt)
      }));
    } catch {
      return [];
    }
  }

  /**
   * Gets a document by ID
   */
  getDocument(id: string): SavedDocument | null {
    const documents = this.getAllDocuments();
    return documents.find(doc => doc.id === id) || null;
  }

  /**
   * Deletes a document
   */
  deleteDocument(id: string): boolean {
    const documents = this.getAllDocuments();
    const filtered = documents.filter(doc => doc.id !== id);
    
    if (filtered.length === documents.length) {
      return false; // Document not found
    }
    
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(filtered));
    return true;
  }

  /**
   * Saves current document state
   */
  saveCurrentDocument(content: string, title?: string): void {
    const data = {
      content,
      title: title || 'Untitled',
      timestamp: new Date().toISOString()
    };
    localStorage.setItem(this.CURRENT_DOC_KEY, JSON.stringify(data));
  }

  /**
   * Gets current document state
   */
  getCurrentDocument(): { content: string; title: string } | null {
    const stored = localStorage.getItem(this.CURRENT_DOC_KEY);
    if (!stored) return null;
    
    try {
      const data = JSON.parse(stored);
      return {
        content: data.content || '',
        title: data.title || 'Untitled'
      };
    } catch {
      return null;
    }
  }

  /**
   * Clears current document
   */
  clearCurrentDocument(): void {
    localStorage.removeItem(this.CURRENT_DOC_KEY);
  }

  private createNewDocument(title: string, content: string, id?: string): SavedDocument {
    const now = new Date();
    return {
      id: id || this.generateId(),
      title,
      content,
      createdAt: now,
      updatedAt: now
    };
  }

  private generateId(): string {
    return `doc_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }
}

