import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Step1Data, Step1Item } from '../../model/Step1Item.type';

@Component({
  selector: 'app-step2-data-renderer',
  imports: [],
  templateUrl: './step2-data-renderer.html',
  styleUrl: './step2-data-renderer.css',
})
export class Step2DataRenderer implements OnInit {
  readonly slug: string;
  private route = inject(ActivatedRoute);

  step2Data = signal<any>([]);

  totalMsgCount = 0;
  totalMessages = 0;

  http = inject(HttpClient);

  constructor() {
    // Access route parameters from snapshot
    this.slug = this.route.snapshot.paramMap.get('slug') || '';
  }

  ngOnInit(): void {
    console.log('Fetching step 2 data');
    this.fetchSnapshots();
  }

  fetchSnapshots(): void {
    const url = `http://localhost:3000/analyse-cgpt/api/step-2-fetch-count-of-conversation/itr1/${this.slug}`;
    this.http.get(url).subscribe({
      next: (data) => {
        // this.snapshots = data;
        // this.isLoading = false;
        console.log('data->     ', data);
        this.step2Data.set(data);

        this.totalMsgCount = data.reduce((acc, item) => acc + (item.msgCount || 0), 0);

        this.totalMessages = data.reduce((acc, item) => acc + (item.messages || 0), 0);
      },
      error: (err) => {
        console.error('Error fetching snapshots:', err);
        // this.errorMsg = 'Failed to load snapshot data';
        // this.isLoading = false;
      },
    });
  }
}
