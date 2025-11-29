import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExportService {

  /**
   * Exports HTML content as a file
   */
  exportAsHtml(content: string, filename: string = 'document.html'): void {
    const blob = new Blob([content], { type: 'text/html' });
    this.downloadFile(blob, filename);
  }

  /**
   * Exports content as plain text
   */
  exportAsText(htmlContent: string, filename: string = 'document.txt'): void {
    const plainText = this.htmlToPlainText(htmlContent);
    const blob = new Blob([plainText], { type: 'text/plain' });
    this.downloadFile(blob, filename);
  }

  /**
   * Exports content as a formatted HTML document
   */
  exportAsFormattedHtml(content: string, title: string = 'Document', filename: string = 'document.html'): void {
    const formattedHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${this.escapeHtml(title)}</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
      line-height: 1.6;
    }
  </style>
</head>
<body>
  ${content}
</body>
</html>`;
    const blob = new Blob([formattedHtml], { type: 'text/html' });
    this.downloadFile(blob, filename);
  }

  /**
   * Prints the content
   */
  printContent(htmlContent: string, title: string = 'Document'): void {
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      alert('Please allow popups to print');
      return;
    }

    const formattedHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${this.escapeHtml(title)}</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
      line-height: 1.6;
    }
    @media print {
      body { margin: 0; padding: 20px; }
      @page { margin: 1cm; }
    }
  </style>
</head>
<body>
  ${htmlContent}
</body>
</html>`;

    printWindow.document.write(formattedHtml);
    printWindow.document.close();
    printWindow.focus();
    
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 250);
  }

  /**
   * Copies content to clipboard
   */
  async copyToClipboard(text: string): Promise<boolean> {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.select();
      
      try {
        document.execCommand('copy');
        document.body.removeChild(textArea);
        return true;
      } catch {
        document.body.removeChild(textArea);
        return false;
      }
    }
  }

  /**
   * Converts HTML to plain text
   */
  htmlToPlainText(html: string): string {
    const tmp = document.createElement('DIV');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  }

  private downloadFile(blob: Blob, filename: string): void {
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  private escapeHtml(text: string): string {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
}

