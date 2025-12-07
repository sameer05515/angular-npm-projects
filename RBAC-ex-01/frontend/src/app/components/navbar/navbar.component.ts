import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav style="background-color: #343a40; color: white; padding: 1rem 0;">
      <div class="container" style="display: flex; justify-content: space-between; align-items: center;">
        <div>
          <a routerLink="/" style="color: white; text-decoration: none; font-size: 1.5rem; font-weight: bold;">
            RBAC App
          </a>
        </div>
        <div style="display: flex; gap: 1rem; align-items: center;">
          <a *ngIf="!isAuthenticated" routerLink="/login" style="color: white; text-decoration: none;">Login</a>
          <a *ngIf="!isAuthenticated" routerLink="/register" style="color: white; text-decoration: none;">Register</a>
          <a *ngIf="isAuthenticated" routerLink="/dashboard" style="color: white; text-decoration: none;">Dashboard</a>
          <button *ngIf="isAuthenticated" (click)="logout()" class="btn btn-danger" style="padding: 5px 15px;">
            Logout
          </button>
        </div>
      </div>
    </nav>
  `,
  styles: []
})
export class NavbarComponent implements OnInit {
  isAuthenticated = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.currentUser$.subscribe(token => {
      this.isAuthenticated = !!token;
    });
  }

  logout(): void {
    this.authService.logout();
  }
}
