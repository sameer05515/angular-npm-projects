import { Component, inject, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-conv-message-renderer',
  imports: [],
  templateUrl: './conv-message-renderer.html',
  styleUrl: './conv-message-renderer.css',
})
export class ConvMessageRenderer {
  readonly slug: string;
  readonly convId: string;
  private route = inject(ActivatedRoute);
  http = inject(HttpClient);

  constructor() {
    // Access route parameters from snapshot
    this.slug = this.route.snapshot.paramMap.get('slug') || '';
    this.convId = this.route.snapshot.paramMap.get('convId') || '';
  }

  ngOnInit(): void {
    console.log('Fetching step 2 data');
    this.fetchSnapshots();
  }

  fetchSnapshots(): void {
    const url = `http://localhost:3000/analyse-cgpt/api/step-3-fetch-messages-of-conversation/itr1/${this.slug}/${this.convId}`;

    this.http.get(url).subscribe({
      next: (data) => {
        console.log('data->     ', data);
        // this.step2Data.set(data);
      },
      error: (err) => {
        console.error('Error fetching snapshots:', err);
      },
    });
  }
}
