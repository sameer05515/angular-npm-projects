import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

type LoginResponse = {
  token: string;
};

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginPageComponent {
  private readonly fb = inject(FormBuilder);
  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);

  private readonly apiBaseUrl = 'http://localhost:3003';

  isSubmitting = false;
  errorMessage = '';
  successMessage = '';

  readonly form = this.fb.nonNullable.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = '';
    this.successMessage = '';

    this.http
      .post<LoginResponse>(`${this.apiBaseUrl}/api/users/login`, this.form.getRawValue())
      .subscribe({
        next: (response) => {
          localStorage.setItem('auth_token', response.token);
          this.successMessage = 'Login successful. Token saved to local storage.';
          this.isSubmitting = false;
          this.router.navigateByUrl('/welcome');
        },
        error: (error) => {
          this.errorMessage = error?.error?.error ?? 'Login failed. Please check your credentials.';
          this.isSubmitting = false;
        }
      });
  }
}
