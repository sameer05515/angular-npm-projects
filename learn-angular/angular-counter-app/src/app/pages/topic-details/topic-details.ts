import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

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
  imports: [CommonModule, RouterLink],
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
