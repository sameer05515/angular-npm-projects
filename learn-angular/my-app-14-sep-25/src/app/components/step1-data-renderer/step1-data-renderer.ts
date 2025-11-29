import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { Step1Data, Step1Item } from '../../model/Step1Item.type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step1-data-renderer',
  imports: [],
  templateUrl: './step1-data-renderer.html',
  styleUrl: './step1-data-renderer.css',
})
export class Step1DataRenderer implements OnInit {
  // constructor(private http: HttpClient) {}

  private router = inject(Router);

  snapshots = signal<Array<Step1Item>>([]);

  http = inject(HttpClient);

  ngOnInit(): void {
    this.fetchSnapshots();
  }

  navigateToSlug(slug:string):void{
// With route parameters
    this.router.navigate(['/s', slug]);
  }

  fetchSnapshots(): void {
    const url = 'http://localhost:3000/analyse-cgpt/api/step-1-fetch-all-snapshot-names/itr2';
    this.http.get<Step1Data>(url).subscribe({
      next: (data) => {
        // this.snapshots = data;
        // this.isLoading = false;
        console.log(data);        
        this.snapshots.set(data.step1);
      },
      error: (err) => {
        console.error('Error fetching snapshots:', err);
        // this.errorMsg = 'Failed to load snapshot data';
        // this.isLoading = false;
      },
    });
  }
}
