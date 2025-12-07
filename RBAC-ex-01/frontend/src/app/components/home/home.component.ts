import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="card">
      <h1>Welcome to RBAC Application</h1>
      <p>Role-Based Access Control (RBAC) system built with Angular and Spring Boot.</p>
      <div style="margin-top: 20px;">
        <a routerLink="/login" class="btn btn-primary" style="margin-right: 10px;">Login</a>
        <a routerLink="/register" class="btn btn-primary">Register</a>
      </div>
    </div>
  `,
  styles: []
})
export class HomeComponent {}
