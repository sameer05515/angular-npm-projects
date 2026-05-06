import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SmartContentPreviewerComponent } from '../../components/smart-content-previewer/smart-content-previewer';

type TopicDetails = {
  uniqueId?: string;
  name?: string;
  description?: string;
  parentId?: string;
  [key: string]: unknown;
};

@Component({
  selector: 'app-topic-details',
  standalone: true,
  imports: [CommonModule, RouterLink, SmartContentPreviewerComponent],
  templateUrl: './topic-details.html',
  styleUrl: './topic-details.css'
})
export class TopicDetailsPageComponent {
  private readonly http = inject(HttpClient);
  private readonly route = inject(ActivatedRoute);
  private readonly apiBaseUrl = 'http://localhost:3003';

  topic: TopicDetails | null = null;
  isLoading = true;
  errorMessage = '';

  get smartContentText(): string {
    if (!this.topic) {
      return '';
    }

    const smartContent = this.topic['smartContent'];
    if (typeof smartContent === 'string') {
      return smartContent;
    }

    if (smartContent && typeof smartContent === 'object' && 'content' in smartContent) {
      const content = (smartContent as { content?: unknown }).content;
      return typeof content === 'string' ? content : '';
    }

    return typeof this.topic.description === 'string' ? this.topic.description : '';
  }

  get smartContentTextOutputType(): string {
    if (!this.topic) {
      return '';
    }

    const smartContent = this.topic['smartContent'];
    if (smartContent && typeof smartContent === 'object' && 'textOutputType' in smartContent) {
      const outputType = (smartContent as { textOutputType?: unknown }).textOutputType;
      return typeof outputType === 'string' ? outputType : '';
    }

    return '';
  }

  constructor() {
    const uniqueId = this.route.snapshot.paramMap.get('uniqueId');

    if (!uniqueId) {
      this.errorMessage = 'Topic id is missing in route.';
      this.isLoading = false;
      return;
    }

    this.http.get<TopicDetails>(`${this.apiBaseUrl}/topics/${uniqueId}`).subscribe({
      next: (response) => {
        this.topic = response;
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = error?.error?.error ?? 'Failed to load topic details.';
        this.isLoading = false;
      }
    });
  }
}
