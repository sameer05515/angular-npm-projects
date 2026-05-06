import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class SignupPageComponent {
  private readonly fb = inject(FormBuilder);
  private readonly http = inject(HttpClient);

  private readonly apiBaseUrl = 'http://localhost:3003';

  isSubmitting = false;
  errorMessage = '';
  successMessage = '';

  readonly form = this.fb.nonNullable.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = '';
    this.successMessage = '';

    this.http.post(`${this.apiBaseUrl}/api/users/register`, this.form.getRawValue()).subscribe({
      next: () => {
        this.successMessage = 'Account created successfully. You can login now.';
        this.form.reset({
          username: '',
          email: '',
          password: ''
        });
        this.isSubmitting = false;
      },
      error: (error) => {
        this.errorMessage = error?.error?.error ?? 'Sign-up failed. Please try again.';
        this.isSubmitting = false;
      }
    });
  }
}
