import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../core/auth.service';
import { MovieService } from '../movie/movie.service';
import { TrackingService } from '../shared/tracking.service';

@Component({
  selector: 'app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.scss'],
})
export class AppShellComponent {
  protected authService: AuthService = inject(AuthService);
  private movieService: MovieService = inject(MovieService);
  private router: Router = inject(Router);
  private trackingService: TrackingService = inject(TrackingService);

  genres$ = this.movieService.getGenres();

  sideDrawerOpen = false;

  private _searchValue = '';
  set searchValue(value: string) {
    this._searchValue = value;
    this.router.navigate(['search', value]);
  }
  get searchValue(): string {
    return this._searchValue;
  }

  toggleSideDrawer() {
    this.sideDrawerOpen = !this.sideDrawerOpen;
  }

  trackNavigation(route: string) {
    this.trackingService.trackEvent(`nav to: ${route}`);
  }
}
