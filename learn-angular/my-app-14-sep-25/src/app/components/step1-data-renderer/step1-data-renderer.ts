import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { Step1Item } from '../../model/Step1Item.type';

@Component({
  selector: 'app-step1-data-renderer',
  imports: [],
  templateUrl: './step1-data-renderer.html',
  styleUrl: './step1-data-renderer.css',
})
export class Step1DataRenderer implements OnInit {
  // constructor(private http: HttpClient) {}

  snapshots = signal<Array<Step1Item>>([]);

  http = inject(HttpClient);

  ngOnInit(): void {
    this.fetchSnapshots();
  }

  fetchSnapshots(): void {
    const url = 'http://localhost:3000/analyse-cgpt/api/step-1-fetch-all-snapshot-names/itr2';
    this.http.get<unknown>(url).subscribe({
      next: (data) => {
        // this.snapshots = data;
        // this.isLoading = false;
        console.log(data);        
        this.snapshots.set(data?.step1)
      },
      error: (err) => {
        console.error('Error fetching snapshots:', err);
        // this.errorMsg = 'Failed to load snapshot data';
        // this.isLoading = false;
      },
    });
  }
}
