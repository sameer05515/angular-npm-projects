import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './reset-password.html',
  styleUrl: './reset-password.css'
})
export class ResetPasswordPageComponent {
  private readonly fb = inject(FormBuilder);
  private readonly http = inject(HttpClient);
  private readonly apiBaseUrl = 'http://localhost:3003';

  isSubmitting = false;
  errorMessage = '';
  successMessage = '';

  readonly form = this.fb.nonNullable.group({
    username: ['', [Validators.required]],
    newPassword: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required]]
  });

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = '';
    this.successMessage = '';

    const { username, newPassword, confirmPassword } = this.form.getRawValue();

    if (newPassword !== confirmPassword) {
      this.errorMessage = 'New password and confirm password must match.';
      this.isSubmitting = false;
      return;
    }

    this.http.post<{ message?: string }>(`${this.apiBaseUrl}/api/users/reset-password`, {
      username,
      newPassword
    }).subscribe({
      next: (response) => {
        this.successMessage = response?.message ?? 'Password reset successful.';
        this.isSubmitting = false;
        this.form.reset({
          username: '',
          newPassword: '',
          confirmPassword: ''
        });
      },
      error: (error) => {
        this.errorMessage = error?.error?.error ?? 'Failed to reset password. Please try again.';
        this.isSubmitting = false;
      }
    });
  }
}
