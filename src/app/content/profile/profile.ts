import { Component, signal } from '@angular/core';
import { User, UserProfile } from '../../shared/services/user';

@Component({
  selector: 'app-profile',
  styleUrl: './profile.css',
  templateUrl: './profile.html',
})
export class Profile {
  user = signal<UserProfile | null>(null);
  profileError = signal('');

  constructor(private userService: User) {
    this.fetchUser();
  }

  fetchUser() {
    this.userService.getuser().subscribe({
      next: (res) => {
        this.user.set(res);
      },
      error: () => {
        this.profileError.set('Could not load your profile. Please sign in again.');
      },
    });
  }
}
