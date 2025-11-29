import { Injectable } from '@angular/core';

export interface TextStats {
  characters: number;
  charactersNoSpaces: number;
  words: number;
  paragraphs: number;
  lines: number;
}

@Injectable({
  providedIn: 'root'
})
export class TextAnalysisService {

  /**
   * Analyzes HTML content and returns statistics
   * @param htmlContent HTML content to analyze
   * @returns TextStats object with various metrics
   */
  analyzeText(htmlContent: string): TextStats {
    // Strip HTML tags to get plain text
    const plainText = this.stripHtml(htmlContent);
    
    return {
      characters: plainText.length,
      charactersNoSpaces: plainText.replace(/\s/g, '').length,
      words: this.countWords(plainText),
      paragraphs: this.countParagraphs(htmlContent),
      lines: plainText.split('\n').filter(line => line.trim().length > 0).length
    };
  }

  /**
   * Strips HTML tags from content
   */
  private stripHtml(html: string): string {
    const tmp = document.createElement('DIV');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  }

  /**
   * Counts words in text
   */
  private countWords(text: string): number {
    return text.trim().split(/\s+/).filter(word => word.length > 0).length;
  }

  /**
   * Counts paragraphs in HTML
   */
  private countParagraphs(html: string): number {
    if (!html || html.trim().length === 0) return 0;
    // Count <p>, <div>, and line breaks
    const pMatches = (html.match(/<p[^>]*>/gi) || []).length;
    const divMatches = (html.match(/<div[^>]*>/gi) || []).length;
    const brMatches = (html.match(/<br\s*\/?>/gi) || []).length;
    return Math.max(1, pMatches + divMatches + Math.ceil(brMatches / 2));
  }

  /**
   * Converts HTML to plain text
   */
  htmlToPlainText(html: string): string {
    return this.stripHtml(html);
  }
}

