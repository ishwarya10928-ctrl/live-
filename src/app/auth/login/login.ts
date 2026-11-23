import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Auth } from '../../shared/services/auth';
import { Router } from '@angular/router';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  logInForm!: FormGroup;
  loginError = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: Auth,
  ) {
    this.initForm();
    localStorage.clear();
  }

  initForm() {
    this.logInForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    this.loginError = '';

    if (this.logInForm.invalid) {
      this.logInForm.markAllAsTouched();
      this.loginError = 'Enter your email and password.';
      return;
    }

    const payload = {
      username: this.logInForm.value.userName,
      password: this.logInForm.value.password,
    };

    this.authService.getlogIn(payload).subscribe({
      next: (res) => {
        if (typeof res?.accessToken !== 'string' || !res.accessToken) {
          this.loginError = 'Login response did not include an access token.';
          return;
        }

        localStorage.setItem('token', res.accessToken);
        void this.router.navigate(['/content/dashboard']);
      },
      error: () => {
        this.loginError = 'Login failed. Check your credentials and try again.';
      },
    });
  }
}
