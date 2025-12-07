import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  template: `
    <div class="card" style="max-width: 400px; margin: 50px auto;">
      <h2>Register</h2>
      <form [formGroup]="registerForm" (ngSubmit)="onSubmit()">
        <div class="form-group">
          <label for="username">Username</label>
          <input 
            id="username" 
            type="text" 
            formControlName="username" 
            required
            [class.error]="registerForm.get('username')?.invalid && registerForm.get('username')?.touched">
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input 
            id="email" 
            type="email" 
            formControlName="email" 
            required
            [class.error]="registerForm.get('email')?.invalid && registerForm.get('email')?.touched">
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input 
            id="password" 
            type="password" 
            formControlName="password" 
            required
            [class.error]="registerForm.get('password')?.invalid && registerForm.get('password')?.touched">
        </div>
        <div *ngIf="errorMessage" style="color: red; margin-bottom: 15px;">
          {{ errorMessage }}
        </div>
        <div *ngIf="successMessage" style="color: green; margin-bottom: 15px;">
          {{ successMessage }}
        </div>
        <button type="submit" class="btn btn-primary" [disabled]="registerForm.invalid || loading">
          {{ loading ? 'Registering...' : 'Register' }}
        </button>
      </form>
      <p style="margin-top: 15px;">
        Already have an account? <a routerLink="/login">Login here</a>
      </p>
    </div>
  `,
  styles: [`
    .error {
      border-color: #dc3545 !important;
    }
  `]
})
export class RegisterComponent {
  registerForm: FormGroup;
  errorMessage = '';
  successMessage = '';
  loading = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      this.loading = true;
      this.errorMessage = '';
      this.successMessage = '';
      
      this.authService.register(this.registerForm.value).subscribe({
        next: () => {
          this.successMessage = 'Registration successful! Redirecting to login...';
          setTimeout(() => {
            this.router.navigate(['/login']);
          }, 2000);
          this.loading = false;
        },
        error: (error) => {
          this.errorMessage = error.error || 'Registration failed. Please try again.';
          this.loading = false;
        }
      });
    }
  }
}
