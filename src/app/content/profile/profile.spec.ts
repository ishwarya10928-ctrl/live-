import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Profile } from './profile';

describe('Profile', () => {
  let component: Profile;
  let fixture: ComponentFixture<Profile>;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    localStorage.setItem('token', 'test-token');
    await TestBed.configureTestingModule({
      imports: [Profile],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    httpTestingController = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(Profile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    httpTestingController.verify();
    localStorage.removeItem('token');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the authenticated user profile', () => {
    const request = httpTestingController.expectOne('https://dummyjson.com/auth/me');
    expect(request.request.headers.get('Authorization')).toBe('Bearer test-token');
    request.flush({
      id: 1,
      firstName: 'Alex',
      lastName: 'Morgan',
      email: 'alex@example.com',
      maidenName: 'Taylor',
      age: 30,
      phone: '555-0100',
    });
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Alex Morgan');
    expect(fixture.nativeElement.textContent).toContain('alex@example.com');
  });
});
