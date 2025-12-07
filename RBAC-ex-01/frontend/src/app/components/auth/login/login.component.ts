import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  template: `
    <div class="card" style="max-width: 400px; margin: 50px auto;">
      <h2>Login</h2>
      <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
        <div class="form-group">
          <label for="username">Username</label>
          <input 
            id="username" 
            type="text" 
            formControlName="username" 
            required
            [class.error]="loginForm.get('username')?.invalid && loginForm.get('username')?.touched">
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input 
            id="password" 
            type="password" 
            formControlName="password" 
            required
            [class.error]="loginForm.get('password')?.invalid && loginForm.get('password')?.touched">
        </div>
        <div *ngIf="errorMessage" style="color: red; margin-bottom: 15px;">
          {{ errorMessage }}
        </div>
        <button type="submit" class="btn btn-primary" [disabled]="loginForm.invalid || loading">
          {{ loading ? 'Logging in...' : 'Login' }}
        </button>
      </form>
      <p style="margin-top: 15px;">
        Don't have an account? <a routerLink="/register">Register here</a>
      </p>
    </div>
  `,
  styles: [`
    .error {
      border-color: #dc3545 !important;
    }
  `]
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage = '';
  loading = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.loading = true;
      this.errorMessage = '';
      
      this.authService.login(this.loginForm.value).subscribe({
        next: () => {
          this.router.navigate(['/dashboard']);
          this.loading = false;
        },
        error: (error) => {
          this.errorMessage = error.error || 'Login failed. Please try again.';
          this.loading = false;
        }
      });
    }
  }
}
