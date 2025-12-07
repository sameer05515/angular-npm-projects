import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card">
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard! You are successfully authenticated.</p>
      
      <div style="margin-top: 30px;">
        <h3>Test API Endpoints</h3>
        <div style="display: flex; gap: 10px; margin-top: 15px;">
          <button class="btn btn-primary" (click)="testPublicEndpoint()">Test Public</button>
          <button class="btn btn-primary" (click)="testUserEndpoint()">Test User</button>
          <button class="btn btn-primary" (click)="testAdminEndpoint()">Test Admin</button>
        </div>
        
        <div *ngIf="apiResponse" style="margin-top: 20px; padding: 15px; background-color: #f8f9fa; border-radius: 4px;">
          <strong>Response:</strong> {{ apiResponse }}
        </div>
        <div *ngIf="apiError" style="margin-top: 20px; padding: 15px; background-color: #f8d7da; border-radius: 4px; color: #721c24;">
          <strong>Error:</strong> {{ apiError }}
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class DashboardComponent implements OnInit {
  apiResponse = '';
  apiError = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.testPublicEndpoint();
  }

  testPublicEndpoint(): void {
    this.apiResponse = '';
    this.apiError = '';
    this.http.get('http://localhost:8080/api/test/public', { responseType: 'text' })
      .subscribe({
        next: (response) => this.apiResponse = response,
        error: (error) => this.apiError = error.message
      });
  }

  testUserEndpoint(): void {
    this.apiResponse = '';
    this.apiError = '';
    this.http.get('http://localhost:8080/api/test/user', { responseType: 'text' })
      .subscribe({
        next: (response) => this.apiResponse = response,
        error: (error) => this.apiError = error.error || error.message
      });
  }

  testAdminEndpoint(): void {
    this.apiResponse = '';
    this.apiError = '';
    this.http.get('http://localhost:8080/api/test/admin', { responseType: 'text' })
      .subscribe({
        next: (response) => this.apiResponse = response,
        error: (error) => this.apiError = error.error || error.message
      });
  }
}
