import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

type Topic = {
  uniqueId?: string;
  name?: string;
  description?: string;
  parentId?: string;
  [key: string]: unknown;
};

@Component({
  selector: 'app-topic-mgmt',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './topic-mgmt.html',
  styleUrl: './topic-mgmt.css'
})
export class TopicMgmtPageComponent {
  private readonly http = inject(HttpClient);
  private readonly fb = inject(FormBuilder);
  private readonly apiBaseUrl = 'http://localhost:3003';

  topics: Topic[] = [];
  selectedTopic: Topic | null = null;
  isLoading = false;
  isSubmitting = false;
  errorMessage = '';
  successMessage = '';

  readonly createForm = this.fb.nonNullable.group({
    name: ['', [Validators.required]],
    description: [''],
    parentId: ['']
  });

  readonly searchForm = this.fb.nonNullable.group({
    searchString: ['', [Validators.required]]
  });

  readonly updateForm = this.fb.nonNullable.group({
    uniqueId: ['', [Validators.required]],
    name: ['', [Validators.required]],
    description: [''],
    parentId: ['']
  });

  constructor() {
    this.loadTopics();
  }

  loadTopics(): void {
    this.isLoading = true;
    this.errorMessage = '';
    this.http.get<Topic[]>(`${this.apiBaseUrl}/topics`).subscribe({
      next: (response) => {
        this.topics = response ?? [];
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = error?.error?.error ?? 'Failed to load topics.';
        this.isLoading = false;
      }
    });
  }

  createTopic(): void {
    if (this.createForm.invalid) {
      this.createForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = '';
    this.successMessage = '';

    this.http.post<Topic>(`${this.apiBaseUrl}/topics`, this.createForm.getRawValue()).subscribe({
      next: () => {
        this.successMessage = 'Topic created successfully.';
        this.createForm.reset({ name: '', description: '', parentId: '' });
        this.isSubmitting = false;
        this.loadTopics();
      },
      error: (error) => {
        this.errorMessage = error?.error?.error ?? 'Failed to create topic.';
        this.isSubmitting = false;
      }
    });
  }

  searchTopics(): void {
    if (this.searchForm.invalid) {
      this.searchForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';
    this.successMessage = '';

    this.http
      .post<Topic[]>(`${this.apiBaseUrl}/topics/search`, this.searchForm.getRawValue())
      .subscribe({
        next: (response) => {
          this.topics = response ?? [];
          this.isLoading = false;
        },
        error: (error) => {
          this.errorMessage = error?.error?.error ?? 'Failed to search topics.';
          this.isLoading = false;
        }
      });
  }

  resetSearch(): void {
    this.searchForm.reset({ searchString: '' });
    this.loadTopics();
  }

  editTopic(topic: Topic): void {
    this.selectedTopic = topic;
    this.updateForm.reset({
      uniqueId: String(topic.uniqueId ?? ''),
      name: String(topic.name ?? ''),
      description: String(topic.description ?? ''),
      parentId: String(topic.parentId ?? '')
    });
  }

  updateTopic(): void {
    if (this.updateForm.invalid) {
      this.updateForm.markAllAsTouched();
      return;
    }

    const { uniqueId, ...payload } = this.updateForm.getRawValue();
    this.isSubmitting = true;
    this.errorMessage = '';
    this.successMessage = '';

    this.http.put(`${this.apiBaseUrl}/topics/${uniqueId}`, payload).subscribe({
      next: () => {
        this.successMessage = 'Topic updated successfully.';
        this.selectedTopic = null;
        this.isSubmitting = false;
        this.loadTopics();
      },
      error: (error) => {
        this.errorMessage = error?.error?.error ?? 'Failed to update topic.';
        this.isSubmitting = false;
      }
    });
  }

  publishTopic(uniqueId: string): void {
    this.errorMessage = '';
    this.successMessage = '';
    this.http.put(`${this.apiBaseUrl}/topics/${uniqueId}/publish`, {}).subscribe({
      next: () => {
        this.successMessage = 'Topic published successfully.';
        this.loadTopics();
      },
      error: (error) => {
        this.errorMessage = error?.error?.error ?? 'Failed to publish topic.';
      }
    });
  }
}
