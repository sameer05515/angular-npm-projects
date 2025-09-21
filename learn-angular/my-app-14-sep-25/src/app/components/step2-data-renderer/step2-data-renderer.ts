import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-step2-data-renderer',
  imports: [],
  templateUrl: './step2-data-renderer.html',
  styleUrl: './step2-data-renderer.css',
})
export class Step2DataRenderer {
  readonly slug: string;
  private route = inject(ActivatedRoute);

  http = inject(HttpClient);

  constructor() {
    // Access route parameters from snapshot
    this.slug = this.route.snapshot.paramMap.get('slug') || '';
  }
}
