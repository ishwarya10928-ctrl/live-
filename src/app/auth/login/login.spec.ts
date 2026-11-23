import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { vi } from 'vitest';
import { Auth } from '../../shared/services/auth';
import { Login } from './login';

describe('Login', () => {
  let component: Login;
  let fixture: ComponentFixture<Login>;
  const auth = {
    getlogIn: vi.fn(() => of({ accessToken: 'test-token' })),
  };
  const router = {
    navigate: vi.fn(),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Login],
      providers: [
        { provide: Auth, useValue: auth },
        { provide: Router, useValue: router },
      ],
    }).compileComponents();

    auth.getlogIn.mockClear();
    router.navigate.mockClear();
    fixture = TestBed.createComponent(Login);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to the dashboard after a successful login', () => {
    fixture.detectChanges();
    const userNameInput = fixture.nativeElement.querySelector(
      '[formControlName="userName"]',
    ) as HTMLInputElement;
    const passwordInput = fixture.nativeElement.querySelector(
      '[formControlName="password"]',
    ) as HTMLInputElement;

    userNameInput.value = 'user@example.com';
    userNameInput.dispatchEvent(new Event('input'));
    passwordInput.value = 'password';
    passwordInput.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    fixture.nativeElement.querySelector('button').click();

    expect(auth.getlogIn).toHaveBeenCalledWith({
      username: 'user@example.com',
      password: 'password',
    });
    expect(router.navigate).toHaveBeenCalledWith(['/content/dashboard']);
  });
});
