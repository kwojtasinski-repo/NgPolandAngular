import { inject, Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  private authService = inject(AuthService);

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated) {
      return true;
    }

    alert('Please log in!');
    return false;
  }
}
